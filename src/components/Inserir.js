import { Button } from "@material-ui/core";
import MaterialUIInput from "@material-ui/core/Input";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function Inserir() {
  const { handleSubmit, watch, control } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={MaterialUIInput}
        name="titulo"
        control={control}
        defaultValue="titulo"
      />
      <Controller
        as={MaterialUIInput}
        name="descricao"
        control={control}
        defaultValue="descricao"
      />
      <Controller
        as={MaterialUIInput}
        name="data"
        control={control}
        defaultValue="data"
      />
      <Button type="submit" variant="contained" color="primary">
        enviar
      </Button>
    </form>
  );
}
