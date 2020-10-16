import React, { createContext, useContext, useState } from "react";

export const FormularioContext = createContext();

const initialState = {
  listaToDo: [],
};

export default function FormularioContextProvider({ children }) {
  const [toDos, setToDo] = useState(initialState);

  function adicionarToDo(task) {
    setToDo((prevState) => ({ listaToDo: [task, ...prevState.listaToDo] }));
  }

  console.log(toDos.listaToDo);

  return (
    <FormularioContext.Provider value={{ adicionarToDo, ...toDos }}>
      {children}
    </FormularioContext.Provider>
  );
}

export function useFormularioContext() {
  const { adicionarToDo, listaToDo } = useContext(FormularioContext);

  return {
    adicionarToDo,
    listaToDo,
  };
}
