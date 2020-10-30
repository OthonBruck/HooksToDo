import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import useStyles from "./styles";
import schema from "./schema";

import { useFormularioContext } from "../../contexts/FormularioContext";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers";

import clsx from "clsx";
import Errormessage from "./Errormessage.jsx";

export default function Tarefas({ task, id }) {
  const classes = useStyles();
  const { excluirToDo, alterarToDo } = useFormularioContext();
  const [open, setOpen] = useState(false);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month ,year].join("-");
  }
  const validate = async (dado) => {
    alterarToDo({ ...dado, data: formatDate(dado.data) }, id);
    setOpen(false);
  };
  const methods = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, errors } = methods;
  return (
    <li>
      <FormProvider {...methods}>
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
                      defaultValue={task.titulo}
                    />
                    <Errormessage errors={errors.titulo}/>
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
                      defaultValue={task.descricao}
                    />
                    <Errormessage errors={errors.descricao}/>
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
                        defaultValue="2020-01-01"
                      />
                    </Grid>
                    <Errormessage errors={errors.data}/>
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
                      name="destaque"
                      defaultValue={task.destaque}
                      render={({onChange, onBlur, name, value }) => (
                        <Checkbox
                          color="default"
                          onBlur={onBlur}
                          checkedIcon={
                            <span
                              className={clsx(
                                classes.icon,
                                classes.checkedIcon
                              )}
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
              <Button
                className={classes.buttons}
                onClick={() => excluirToDo(id)}
              >
                Finalizar Tarefa
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </li>
  );
}
