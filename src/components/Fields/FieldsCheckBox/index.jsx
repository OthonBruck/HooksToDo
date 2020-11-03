import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Controller } from "react-hook-form";
import useStyles from "./styles";
import clsx from "clsx";

export default function FieldCheckbox({ nome, label, defaultValue }) {
  const classes = useStyles();
  return (
    <div>
      <Grid item className={classes.gridItem} xs={12}>
        <label className={classes.label}>{label}</label>
        <Controller
          name={nome}
          defaultValue={defaultValue}
          render={({ onChange, onBlur, value, name }) => (
            <Checkbox
              color="default"
              onBlur={onBlur}
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              icon={<span className={classes.icon} />}
              onChange={(e) => onChange(e.target.checked)}
              checked={value}
              name={name}
            />
          )}
        />
      </Grid>
    </div>
  );
}
