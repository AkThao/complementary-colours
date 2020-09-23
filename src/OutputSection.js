import React from "react";
import convert from "color-convert";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const OutputSection = (props) => {
  const rgb = convert.hex.rgb(props.colour);
  const hsl = convert.hex.hsl(props.colour);
  const cmyk = convert.hex.cmyk(props.colour);

  return (
    <>
      <div>
        <Typography>Complementary Colour</Typography>
        <ColourDisplayBox colour={props.colour} />
        <RgbField value={[rgb[0], rgb[1], rgb[2]]} />
        <HexField
          value={[
            props.colour.slice(1, 3),
            props.colour.slice(3, 5),
            props.colour.slice(5, 7),
          ]}
        />
        <HslField value={[hsl[0], hsl[1], hsl[2]]} />
        <CmykField value={[cmyk[0], cmyk[1], cmyk[2], cmyk[3]]} />
      </div>
    </>
  );
};

export default OutputSection;
