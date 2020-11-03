import React from "react";
import { useFormularioContext } from "../../contexts/FormularioContext";
import useStyles from "./styles";
import Tarefa from "../Tarefa/index";

export default function Lista() {
  const classes = useStyles();
  const { toDos } = useFormularioContext();

  return (
    <ul className={classes.lista}>
      {toDos.map((task, index) => (
        <Tarefa key={index} task={task} id={index} />
      ))}
    </ul>
  );
}
