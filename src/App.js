import React from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import FormularioContextProvider from "./contexts/FormularioContext";

function App() {
  return (
    <div>
      <FormularioContextProvider>
        <Formulario />
        <Lista />
      </FormularioContextProvider>
    </div>
  );
}
export default App;
