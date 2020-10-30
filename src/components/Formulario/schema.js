import * as Yup from "yup";

const schema = Yup.object().shape({
  titulo: Yup.string()
    .required("Obrigatorio")
    .trim("Não é permitido apenas espaços em branco")
    .min(3, "No minimo três caracteres")
    .max(30, "No máximo trinta caracteres"),
  descricao: Yup.string()
    .required("Obrigatorio")
    .trim("Não é permitido apenas espaços em branco")
    .min(3, "No minimo três caracteres")
    .max(30, "No máximo trinta caracteres"),
  data: Yup.date()
    .min(new Date("01-01-2020"), "A data deve ser depois de 01-01-2020")
    .max(new Date("12-31-2020"), "Limite de data 31-12-2020")
    .required("Obrigatorio"),
});

export default schema;
