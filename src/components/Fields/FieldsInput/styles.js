import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5),
      color: "black",
      "&:focus": {
        background: "azure",
        border: "4px #191919",
        borderRadius: "4px",
      },
      "&:hover": {
        background: "azure",
        border: "4px #191919",
        borderRadius: "4px",
      },
    },
  }));
  return styles();
};

export default useStyles;
