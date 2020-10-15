import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& label.Mui-focused": {
      color: "#00FFFF",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00FFFF",
      },
    },
  },
  xD: {
    backgroundColor: "#323232",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "#00FFFF",
    color: "black",
  },
}));

export default function Formulario() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} className={classes.xD}>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Titulo" />}
              name="titulo"
              control={control}
            />
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Descrição" />}
              name="descricao"
              control={control}
            />
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Data" />}
              name="data"
              control={control}
            />
          </Grid>
          <Button
            className={classes.buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </Grid>
      </form>
    </div>
  );
}
