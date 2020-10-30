import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import useStyles from "./styles";
import schema from "./schema"

import { useFormularioContext } from "../../contexts/FormularioContext";
import { Controller, useForm } from "react-hook-form";

import * as Yup from "yup";
import clsx from "clsx";

export default function Tarefas({ task, id }) {
  const classes = useStyles();
  const { excluirToDo, alterarToDo } = useFormularioContext();
  const [open, setOpen] = useState(false);

  const validate = async (dado) => {
    try {

      await schema.validate(dado, {
        abortEarly: false,
      });
      alterarToDo(dado, id);
      setOpen(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        setError("titulo", { message: errorMessages.titulo });
        setError("descricao", { message: errorMessages.descricao });
        setError("data", { message: errorMessages.data });
      }
    }
  };

  const { handleSubmit, control, setError, errors } = useForm();
  return (
    <li>
      <form onBlur={handleSubmit(validate)}>
        <Grid container spacing={3} className={classes.Grid}>
          <Grid item className={classes.gridDestaque} xs={12}>
            <div>
              {task.destaque ? (
                <div>
                  <StarOutlinedIcon fontSize="large" />
                </div>
              ) : (
                <StarBorderOutlinedIcon fontSize="large" />
              )}
            </div>
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <div>
              {open ? (
                <div>
                  <Controller
                    as={
                      <TextField
                        variant="standard"
                        value={task.titulo}
                        inputProps={{
                          className: classes.input,
                        }}
                        fullWidth
                      />
                    }
                    name="titulo"
                    control={control}
                    defaultValue={task.titulo}
                  />
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
                </div>
              ) : (
                <Typography
                  className={classes.editable}
                  onClick={() => setOpen(!open)}
                >
                  {task.titulo}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <div>
              {open ? (
                <div>
                  <Controller
                    as={
                      <TextField
                        variant="standard"
                        value={task.descricao}
                        inputProps={{
                          className: classes.input,
                        }}
                        fullWidth
                      />
                    }
                    name="descricao"
                    control={control}
                    defaultValue={task.descricao}
                  />
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
                </div>
              ) : (
                <Typography
                  className={classes.editable}
                  onClick={() => setOpen(!open)}
                >
                  {task.descricao}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <div>
              {open ? (
                <div>
                  <Grid item className={classes.gridItem} xs={12}>
                    <Controller
                      as={
                        <TextField
                          variant="standard"
                          label="Data"
                          type="date"
                        />
                      }
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
                </div>
              ) : (
                <Typography
                  className={classes.editable}
                  onClick={() => setOpen(!open)}
                >
                  {task.data}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <div>
              {open ? (
                <div>
                  <label className={classes.label}>Destaque ?</label>
                  <Controller
                    control={control}
                    name="destaque"
                    render={({ onChange, onBlur, value, name }) => (
                      <Checkbox
                        color="default"
                        onBlur={() => onBlur()}
                        checkedIcon={
                          <span
                            className={clsx(classes.icon, classes.checkedIcon)}
                          />
                        }
                        icon={<span className={classes.icon} />}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        name={name}
                      />
                    )}
                  />
                </div>
              ) : null}
            </div>
          </Grid>
          <Grid item className={classes.gridItem} xs={12}>
            <Button className={classes.buttons} onClick={() => excluirToDo(id)}>
              Finalizar Tarefa
            </Button>
          </Grid>
        </Grid>
      </form>
    </li>
  );
}
