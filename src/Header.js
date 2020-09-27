import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  header: theme.header,
  headerTitle: theme.headerTitle,
  iconButton: theme.iconButton,
  menuIcon: theme.menuIcon,
  menu: {
    border: "1px solid black",
    backgroundColor: "#fbeec1",
  },
  menuItem: {
    fontSize: 20,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#bc986a",
      color: "#436795",
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  const handleOpenMenu = (e) => {
    props.setMenuAnchor(e.currentTarget);
  };

  const handleCloseMenu = (page) => {
    props.setMenuAnchor(null);
    props.setPage(page);
  };

  return (
    <AppBar elevation={0}>
      <Toolbar className={classes.header}>
        <IconButton className={classes.iconButton} onClick={handleOpenMenu}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Menu
          classes={{
            paper: classes.menu,
          }}
          elevation={0}
          onClose={handleCloseMenu}
          open={props.open}
          anchorEl={props.menuAnchor}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            className={classes.menuItem}
            onClick={() => handleCloseMenu("home")}
          >
            Home
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            onClick={() => handleCloseMenu("about")}
          >
            About
          </MenuItem>
        </Menu>
        <Typography className={classes.headerTitle}>
          Complementary Colour Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
