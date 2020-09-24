import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

export default createMuiTheme({
  title: {
    color: grey[800],
    fontSize: 50,
    fontWeight: 100,
    marginTop: 20,
    letterSpacing: "1px",
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
  },
  textField: {
    height: 50,
    width: 100,
    padding: 10,
    margin: "10px 10px 10px 0px",
    background: "lavenderblush",
  },
});
