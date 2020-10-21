import { Button, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormularioContext } from "../contexts/FormularioContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    height: 300,
    width: 300,
    backgroundColor: "cyan",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    border: "4px #00FFFF",
    borderRadius: "5px",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Tarefas({ task, id }) {
  const classes = useStyles();

  const { excluirToDo } = useFormularioContext();

  return (
    <li>
      <Grid container spacing={3} className={classes.Grid}>
        <Grid item className={classes.gridItem} xs={12}>
          <h2>{task.titulo}</h2>
        </Grid>
        <Grid item className={classes.gridItem} xs={6}>
          <h3>{task.descricao}</h3>
        </Grid>
        <Grid item className={classes.gridItem} xs={6}>
          <h3>{task.data}</h3>
        </Grid>
        <Grid item className={classes.gridItem} xs={6}>
          ALTERAR
        </Grid>
        <Grid item className={classes.gridItem} xs={6}>
          <Button onClick={() => excluirToDo(id)}>Concluir</Button>
        </Grid>
      </Grid>
    </li>
  );
}
