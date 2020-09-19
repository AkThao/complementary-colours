import React from "react";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import RgbField from "./ColourFields/RgbField";
import HexField from "./ColourFields/HexField";
import HslField from "./ColourFields/HslField";
import CmykField from "./ColourFields/CmykField";

const OutputSection = () => {
  const colour = "#ffffff";

  return (
    <>
      <div>
        <Typography>Complementary Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <RgbField />
        <HexField />
        <HslField />
        <CmykField />
      </div>
    </>
  );
};

export default OutputSection;
