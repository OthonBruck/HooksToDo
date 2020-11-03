import React from "react";
import useStyles from "./styles";
import schema from "./schema";

import { useForm, FormProvider } from "react-hook-form";
import { useFormularioContext } from "../../contexts/FormularioContext";

import { yupResolver } from "@hookform/resolvers";
import Form from "../Form/index";

export default function Formulario() {
  const classes = useStyles();

  const { adicionarToDo } = useFormularioContext();

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const onSubmit = async (dado) => {
    adicionarToDo({ ...dado, data: formatDate(dado.data) });
  };

  const methods = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { handleSubmit, errors } = methods;

  return (
    <div className={classes.root}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Form errors={errors} />
        </form>
      </FormProvider>
    </div>
  );
}
