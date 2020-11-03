import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FieldInput from "../Fields/FieldsInput/index";
import FieldCheckbox from "../Fields/FieldsCheckBox/index";
import useStyles from "./styles";

export default function Index({ errors }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item className={classes.gridItem} xs={12}>
          <FieldInput
            errors={errors.titulo}
            name="titulo"
            label="Titulo"
            type="text"
            defaultValue=""
          />
        </Grid>
        <Grid item className={classes.gridItem} xs={12}>
          <FieldInput
            errors={errors.descricao}
            name="descricao"
            label="Descrição"
            type="text"
            defaultValue=""
          />
        </Grid>
        <Grid item className={classes.gridItem} xs={12}>
          <FieldInput
            errors={errors.data}
            name="data"
            label="Data"
            type="date"
            defaultValue="2020-01-01"
          />
        </Grid>
        <Grid item className={classes.gridItem} xs={12}>
          <FieldCheckbox
            nome="destaque"
            label="Destaque ?"
            defaultValue={false}
          />
        </Grid>
        <Button className={classes.buttons} type="submit" variant="contained">
          Enviar
        </Button>
      </Grid>
    </div>
  );
}
