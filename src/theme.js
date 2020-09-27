import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  header: {
    height: 80,
    backgroundColor: "#bc986a",
    borderBottom: "1px solid black",
  },
  headerTitle: {
    color: "#436795",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    "@media (max-width: 600px)": { fontSize: 20 },
    "@media (max-width: 450px)": { fontSize: 15 },
    "@media (max-width: 350px)": { textAlign: "right" },
  },
  iconButton: {
    color: "#436795",
  },
  menuIcon: {
    fontSize: 30,
    "@media (max-width: 600px)": { fontSize: 25 },
    "@media (max-width: 450px)": { fontSize: 20 },
  },
  title: {
    color: grey[600],
    fontSize: 50,
    fontWeight: 100,
    marginTop: 20,
    letterSpacing: "1px",
    "@media (max-width: 600px)": { fontSize: 30 },
    "@media (max-width: 400px)": { fontSize: 20 },
  },
  labelContainer: {
    marginBottom: 5,
    marginTop: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    backgroundColor: "#f2deff",
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    "@media (max-width: 450px)": {
      marginLeft: 0,
    }
  },
  textField: {
    height: 40,
    width: 100,
    padding: 10,
    margin: "10px 5px",
    background: "lavenderblush",
  },
  colourSection: {
    "@media (max-width: 1300px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  colourField: {
    "@media (max-width: 1300px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    "@media (max-width: 450px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  arrow: {
    fontSize: 60,
    transition: "font-size 0.4s",
    "@media (max-width: 1400px)": {
      fontSize: 45,
    },
    "@media (max-width: 1300px)": {
      transform: "rotate(90deg)",
    },
  },
  button: {
    height: 80,
    width: 200,
    alignSelf: "center",
    backgroundColor: "#7bdced",
    border: "1px solid black",
    boxShadow: "2px 2px #666",
    "&:hover": {
      backgroundColor: "#11aa00",
      transition: "background-color 0.4s",
      "& $arrow": {
        fontSize: 75,
        "@media (max-width: 1400px)": {
          fontSize: 55,
        },
      },
    },
    "&:active": {
      boxShadow: "none",
      transform: "translate(2px, 2px)",
      transition: "box-shadow transform 0.4s",
      "@media (max-width: 1300px)": {
        transform: "translate(0px, 2px)",
      },
    },
    "@media (max-width: 1400px)": {
      height: 60,
      width: 150,
    },
    "@media (max-width: 1300px)": {
      marginTop: 50,
      marginBottom: 30,
      boxShadow: "0px 2px #666",
    },
  },
  sectionContainer: {
    "@media (max-width: 1300px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
