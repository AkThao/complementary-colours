import React from "react";
import { TextField, Typography } from "@material-ui/core";

const CmykField = () => {
  return (
    <>
      <Typography>CMYK</Typography>
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 3 }}
        placeholder="0%"
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 3 }}
        placeholder="0%"
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 3 }}
        placeholder="0%"
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 3 }}
        placeholder="0%"
      />
    </>
  );
};

export default CmykField;
