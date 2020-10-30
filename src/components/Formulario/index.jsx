import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import useStyles from "./styles";
import schema from "./schema";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { useFormularioContext } from "../../contexts/FormularioContext";

import clsx from "clsx";

import { yupResolver } from "@hookform/resolvers";

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

    return [day, month, year].join("/");
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
              <Controller
                as={<TextField variant="standard" label="Titulo" />}
                name="titulo"
                defaultValue=""
              />
            </Grid>
            {errors.titulo &&
              (errors.titulo.message !== undefined ? (
                <Alert
                  className={classes.alert}
                  variant="filled"
                  severity="error"
                >
                  {errors.titulo.message}
                </Alert>
              ) : null)}
            <Grid item className={classes.gridItem} xs={12}>
              <Controller
                as={<TextField variant="standard" label="Descrição" />}
                name="descricao"
                defaultValue=""
              />
            </Grid>
            {errors.descricao &&
              (errors.descricao.message !== undefined ? (
                <Alert
                  className={classes.alert}
                  variant="filled"
                  severity="error"
                >
                  {errors.descricao.message}
                </Alert>
              ) : null)}
            <Grid item className={classes.gridItem} xs={12}>
              <Controller
                as={<TextField variant="standard" label="Data" type="date" />}
                name="data"
                defaultValue="2020-01-01"
              />
            </Grid>
            {errors.data &&
              (errors.data.message !== undefined ? (
                <Alert
                  className={classes.alert}
                  variant="filled"
                  severity="error"
                >
                  {errors.data.message}
                </Alert>
              ) : null)}
            <Grid item className={classes.gridItem} xs={12}>
              <label className={classes.label}>Destaque ?</label>
              <Controller
                name="destaque"
                defaultValue={false}
                render={({ onChange, onBlur, checked, name }) => (
                  <Checkbox
                    color="default"
                    onBlur={onBlur}
                    checkedIcon={
                      <span
                        className={clsx(classes.icon, classes.checkedIcon)}
                      />
                    }
                    icon={<span className={classes.icon} />}
                    onChange={(e) => onChange(e.target.checked)}
                    checked={checked}
                    name={name}
                  />
                )}
              />
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
