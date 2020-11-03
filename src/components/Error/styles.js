import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    alert: {
      margin: theme.spacing(1),
      "& div.MuiAlert-message": {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
  }));
  return styles();
};

export default useStyles;
