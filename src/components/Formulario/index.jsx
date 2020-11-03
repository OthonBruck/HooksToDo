import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import schema from "./schema";

import { useForm, FormProvider } from "react-hook-form";
import { useFormularioContext } from "../../contexts/FormularioContext";


import { yupResolver } from "@hookform/resolvers";
import FieldInput from "../Fields/FieldsInput/index";
import FieldCheckbox from "../Fields/FieldsCheckBox/index";

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
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item className={classes.gridItem} xs={12}>
              <FieldInput
                errors={errors.titulo}
                name={"titulo"}
                label={"Titulo"}
                type="text"
                defaultValue=""
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
            <FieldInput
              errors={errors.descricao}
              name={"descricao"}
              label={"Descrição"}
              type="text"
              defaultValue=""
            />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <FieldInput
                errors={errors.data}
                name={"data"}
                label={"Data"}
                type={"date"}
                defaultValue="2020-01-01"
              />
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <FieldCheckbox nome="destaque" label="Destaque ?" defaultValue={false} />
            </Grid>
            <Button
              className={classes.buttons}
              type="submit"
              variant="contained"
            >
              Enviar
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
}
