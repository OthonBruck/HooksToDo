import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Grid: {
      height: 550,
      width: 400,
      backgroundColor: "#5817D1 ",
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      border: "2px solid black",
      borderRadius: "5px",
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    gridDestaque: {
      display: "flex",
      justifyContent: "right",
      alignItems: "right",
      flexDirection: "row-reverse",
      height: "0px",
    },
    buttons: {
      backgroundColor: "#191919",
      color: "azure",
      fontFamily: "verdana",
      "&:hover": {
        backgroundColor: "black",
      },
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
    editable: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5),
      display: "flex",
      textAlign: "center",
      fontFamily: "Helvetica, sans-serif",
      fontWeight: "bold",
      "&:hover": {
        background: "azure",
        border: "4px #00FFFF",
        borderRadius: "4px",
      },
    },
    alert: {
      margin: theme.spacing(1),
      "& div.MuiAlert-message": {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },

    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "black",
      "input:hover ~ &": {
        backgroundColor: "grey",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "black",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "grey",
      },
    },
    label: {
      color: "black",
      fontFamily: "Helvetica, sans-serif",
      fontWeight: "bold",
    },
  }));
  return styles();
};

export default useStyles;
