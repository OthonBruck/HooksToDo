import React from "react";
import Formulario from "./components/Formulario/index.jsx";
import Lista from "./components/Lista/index.jsx";
import FormularioContextProvider from "./contexts/FormularioContext.jsx";

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
