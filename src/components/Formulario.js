import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useFormularioContext } from "../contexts/FormularioContext";
import * as Yup from "yup";

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
    margin: 50,
    backgroundColor: "#323232",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    height: 500,
    width: 500,
    border: "2px solid #00FFFF",
    borderRadius: "5px",
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

  const onSubmit = async (data) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string().required("Obrigatorio"),
        descricao: Yup.string().required("Obrigatorio"),
        data: Yup.date().min(new Date("01-01-2020")).max(new Date()).required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      adicionarToDo(data);
    } catch (err) {
      console.log("deu ruim");
    }
  };

  const { handleSubmit, control } = useForm();

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
