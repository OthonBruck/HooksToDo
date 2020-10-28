import { Button, TextField, Checkbox } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useFormularioContext } from "../contexts/FormularioContext";
import * as Yup from "yup";
import { Alert } from "@material-ui/lab";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& label.Mui-focused": {
      color: "black",
    },
    "& label.MuiInputLabel-root": {
      color: "black",
      fontFamily: "Helvetica, sans-serif",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  xD: {
    margin: 50,
    backgroundColor: "#00CCCC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    height: 600,
    width: 500,
    border: "2px solid black",
    borderRadius: "5px",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "#191919",
    color: "azure",
    fontFamily: "verdana",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  formmm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "black",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: "bold",
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "black",
    "input:hover ~ &": {
      backgroundColor: "grey",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "black",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "grey",
    },
  },
  alert: {
    "& div.MuiAlert-message": {
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
}));

export default function Formulario() {
  const classes = useStyles();

  const { adicionarToDo } = useFormularioContext();

  const onSubmit = async (dado) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string()
          .required("Obrigatorio")
          .min(3, "No minimo três caracteres")
          .max(30, "No máximo trinta caracteres"),
        descricao: Yup.string()
          .required("Obrigatorio")
          .min(3, "No minimo três caracteres")
          .max(30, "No máximo trinta caracteres"),
        data: Yup.date()
          .min(new Date("01-01-2020"), "A data deve ser depois de 01-01-2020")
          .max(new Date("12-31-2020"), "Limite de data 12-31-2020")
          .required("Obrigatorio"),
      });

      await schema.validate(dado, {
        abortEarly: false,
      });
      adicionarToDo(dado);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
          console.log(errorMessages);
        });
        console.log(errorMessages);
        setError("titulo", { message: errorMessages.titulo });
        setError("descricao", { message: errorMessages.descricao });
        setError("data", { message: errorMessages.data });
        console.log(errors);
      }
    }
  };

  const { handleSubmit, control, setError, errors } = useForm();

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formmm}>
        <Grid container spacing={3} className={classes.xD}>
          <Grid item className={classes.gridItem} xs={12}>
            <Controller
              as={<TextField variant="standard" label="Titulo" />}
              name="titulo"
              control={control}
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
              control={control}
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
              control={control}
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
              control={control}
              name="destaque"
              render={({ onChange, onBlur, checked, name }) => (
                <Checkbox
                  color="default"
                  onBlur={onBlur}
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  icon={<span className={classes.icon} />}
                  onChange={(e) => onChange(e.target.checked)}
                  checked={checked}
                  name={name}
                />
              )}
            />
          </Grid>
          <Button className={classes.buttons} type="submit" variant="contained">
            Enviar
          </Button>
        </Grid>
      </form>
    </div>
  );
}
