import React, { createContext, useCallback, useContext, useState } from "react";

export const FormularioContext = createContext();

const initialState = [];

export default function FormularioContextProvider({ children }) {
  const [toDos, setToDo] = useState(initialState);

  const adicionarToDo = useCallback((task) => {
    setToDo((prevState) => [task, ...prevState]);
  }, []);

  const excluirToDo = useCallback(
    (index) => {
      const newTask = toDos.filter((_, ind) => ind !== index);
      setToDo(newTask);
    },
    [toDos]
  );

  const alterarToDo = useCallback(
    (task, index) => {
      setToDo(toDos.map((todo, id) => (id === index ? task : todo)));
    },
    [toDos]
  );

  return (
    <FormularioContext.Provider
      value={{
        adicionarToDo,
        excluirToDo,
        alterarToDo,
        toDos,
      }}
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
