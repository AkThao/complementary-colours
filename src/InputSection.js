import React from "react";
import { Typography } from "@material-ui/core";
import ColourDisplayBox from "./ColourDisplayBox";
import InputFields from "./InputFields";

const InputSection = () => {
  const colour = "#ffffff";

  return (
    <>
      <div>
        <Typography>Input Colour</Typography>
        <ColourDisplayBox colour={colour} />
        <InputFields />
      </div>
    </>
  );
};

export default InputSection;
