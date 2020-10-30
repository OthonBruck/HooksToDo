import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    lista: {
      display: "flex",
      listStyleType: "none",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  }));
  return styles();
};

export default useStyles;
