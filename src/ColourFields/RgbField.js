import React from "react";
import { TextField, Typography } from "@material-ui/core";

const RgbField = () => {
  return (
    <>
      <Typography>RGB</Typography>
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

export default RgbField;
