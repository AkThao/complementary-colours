import React from "react";
import convert from "color-convert";
import { Typography, makeStyles } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const useStyles = makeStyles((theme) => ({
  title: theme.title,
  sectionContainer: theme.sectionContainer,
}));

export default (props) => {
  const classes = useStyles();
  const rgb = convert.hex.rgb(props.colour);
  const hsl = convert.hex.hsl(props.colour);
  const cmyk = convert.hex.cmyk(props.colour);

  return (
    <>
      <div className={classes.sectionContainer}>
        <Typography className={classes.title}>Complementary Colour</Typography>
        <ColourDisplayBox colour={props.colour} />
        <RgbField value={[rgb[0], rgb[1], rgb[2]]} input={false} />
        {props.colour.length === 4 ? (
          <HexField
            value={[
              props.colour.slice(1, 2),
              props.colour.slice(2, 3),
              props.colour.slice(3, 4),
            ]}
            input={false}
          />
        ) : (
          <HexField
            value={[
              props.colour.slice(1, 3),
              props.colour.slice(3, 5),
              props.colour.slice(5, 7),
            ]}
            input={false}
          />
        )}

        <HslField value={[hsl[0], hsl[1], hsl[2]]} input={false} />
        <CmykField value={[cmyk[0], cmyk[1], cmyk[2], cmyk[3]]} input={false} />
      </div>
    </>
  );
};
