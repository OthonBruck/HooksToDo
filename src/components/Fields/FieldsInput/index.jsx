import Grid from "@material-ui/core/Grid";
import React from "react";
import { Controller } from "react-hook-form";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Errormessage from "../../Error";

export default function FieldInput({ errors, name, label, type, defaultValue, value }) {
  const classes = useStyles();
  return (
    <div>
      <Grid item className={classes.gridItem} xs={12}>
        <Controller
          as={<TextField variant="standard" label={label} type={type} value={value}  />}
          name={name}
          defaultValue={defaultValue}
        />
      </Grid>
      <Errormessage errors={errors} />
    </div>
  );
}
