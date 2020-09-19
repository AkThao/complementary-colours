import React from "react";
import { TextField, Typography } from "@material-ui/core";

const HexField = () => {
  return (
    <>
      <Typography>Hex (#)</Typography>
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
      />
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 2 }}
        placeholder="00"
      />
    </>
  );
};

export default HexField;
