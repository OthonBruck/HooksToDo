import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& label.Mui-focused": {
        color: "black",
      },
      "& label.MuiInputLabel-root": {
        color: "black",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "black",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
        },
      },
    },
    gridContainer: {
      margin: 50,
      backgroundColor: "#5817D1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      height: 600,
      width: 500,
      border: "2px solid black",
      borderRadius: "5px",
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttons: {
      backgroundColor: "#191919",
      color: "azure",
      fontFamily: "verdana",
      border: "1px solid black",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  }));
  return styles();
};

export default useStyles;
