import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import useStyles from "./styles";
import schema from "./schema";

import { useFormularioContext } from "../../contexts/FormularioContext";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers";

import FieldInput from "../Fields/FieldsInput";
import FieldCheckbox from "../Fields/FieldsCheckBox";

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

    return [year, month, day].join("-");
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
                    <StarOutlinedIcon fontSize="large" />
                ) : (
                  <StarBorderOutlinedIcon fontSize="large" />
                )}
              </div>
            </Grid>
            <Grid item className={classes.gridItem} xs={12}>
              <div>
                {open ? (
                    <FieldInput
                      errors={errors.titulo}
                      name={"titulo"}
                      label={"Titulo"}
                      value={task.titulo}
                      defaultValue={task.titulo}
                    />
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
                    <FieldInput
                      errors={errors.descricao}
                      name={"descricao"}
                      label={"Descrição"}
                      value={task.descricao}
                      defaultValue={task.descricao}
                    />
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
                    <FieldInput
                      errors={errors.data}
                      name={"data"}
                      label={"Data"}
                      type={"date"}
                      defaultValue={task.data}
                      value={task.data}
                    />
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
                  <FieldCheckbox
                    nome="destaque"
                    label="Destaque ?"
                    defaultValue={task.destaque}
                  />
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
