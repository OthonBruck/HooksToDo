import React from "react";
import { useFormularioContext } from "../contexts/FormularioContext";
import { makeStyles } from "@material-ui/core/styles";
import Tarefa from "./Tarefas";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  lista: {
    display: "flex",
    listStyleType: "none",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function Lista() {
  const classes = useStyles();
  const { toDos } = useFormularioContext();

  return (
    <div>
      <div>
        <ul className={classes.lista}>
          {toDos.map((task, index) => (
            <Tarefa key={index} task={task} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
