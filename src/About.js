import React from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginTop: theme.header.height + 50,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: "50px 20px",
  },
  link: {
    colour: "#436795",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Typography className={classes.text}>
        An easy-to-use app that calculates the complementary colour of any input
        colour.
      </Typography>
      <Typography className={classes.text}>
        Input can be either RGB, hex, HSL or CMYK and the output will be given
        in all 4 colour systems.
      </Typography>
      <Typography className={classes.text}>
        The app was inspired by{" "}
        <Link
          className={classes.link}
          rel="noreferrer"
          target="_blank"
          href="https://htmlcolorcodes.com/color-picker/"
        >
          this site
        </Link>{" "}
        and is based on information from{" "}
        <Link
          className={classes.link}
          rel="noreferrer"
          target="_blank"
          href="https://www.canva.com/colors/color-wheel/"
        >
          here
        </Link>{" "}
        and{" "}
        <Link
          className={classes.link}
          rel="noreferrer"
          target="_blank"
          href="https://graphicdesign.stackexchange.com/questions/1316/what-are-the-true-complementary-colors-and-their-values"
        >
          here
        </Link>
        .
      </Typography>
    </div>
  );
};
