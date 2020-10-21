import React, { createContext, useContext, useState } from "react";

export const FormularioContext = createContext();

const initialState = [];

export default function FormularioContextProvider({ children }) {
  const [toDos, setToDo] = useState(initialState);

  function adicionarToDo(task) {
    setToDo((prevState) => [task, ...prevState]);
  }

  function excluirToDo(index) {
    const newTask = toDos.filter((_, ind) => ind !== index);
    console.log(toDos.filter((_, ind) => ind !== index));
    setToDo(newTask);
  }

  function alterarToDo() {}

  return (
    <FormularioContext.Provider
      value={{ adicionarToDo, excluirToDo, alterarToDo, toDos }}
    >
      {children}
    </FormularioContext.Provider>
  );
}

export function useFormularioContext() {
  const { adicionarToDo, excluirToDo, alterarToDo, toDos } = useContext(
    FormularioContext
  );

  return {
    adicionarToDo,
    excluirToDo,
    alterarToDo,
    toDos,
  };
}
