import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  header: theme.header,
  headerTitle: theme.headerTitle,
  iconButton: theme.iconButton,
  menuIcon: theme.menuIcon,
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0}>
      <Toolbar className={classes.header}>
        <IconButton className={classes.iconButton}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography className={classes.headerTitle}>
          Complementary Colour Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
