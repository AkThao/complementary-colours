import React from "react";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import OutputFields from "./OutputFields";

const OutputSection = () => {
  const colour = "#ffffff";

  return (
    <>
      <div>
        <Typography>Complementary Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <OutputFields />
      </div>
    </>
  );
};

export default OutputSection;
