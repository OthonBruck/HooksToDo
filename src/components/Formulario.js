import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useFormularioContext } from "../contexts/FormularioContext";

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
    height: 500,
    width: 500,
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
  formmm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Formulario() {
  const classes = useStyles();

  const { adicionarToDo } = useFormularioContext();

  const onSubmit = (data) => {
    adicionarToDo(data);
  };

  const { handleSubmit, control } = useForm();

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formmm}>
        <Grid container spacing={3} className={classes.xD}>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Titulo" />}
              name="titulo"
              control={control}
              defaultValue=""
            />
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Descrição" />}
              name="descricao"
              control={control}
              defaultValue=""
            />
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="outlined" label="Data" />}
              name="data"
              control={control}
              defaultValue=""
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
