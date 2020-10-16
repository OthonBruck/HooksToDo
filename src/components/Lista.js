import React from "react";
import { useFormularioContext } from "../contexts/FormularioContext";

export default function Lista() {
  const { listaToDo } = useFormularioContext();
  return (
    <div>
      <ul>
        {listaToDo.map((task, index) => (
          <li key={index}>{task.titulo}</li>
        ))}
      </ul>
    </div>
  );
}
