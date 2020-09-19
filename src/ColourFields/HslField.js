import React from "react";
import { TextField, Typography } from "@material-ui/core";

const HslField = () => {
  return (
    <>
      <Typography>HSL</Typography>
      <TextField
        variant="outlined"
        inputProps={{ maxLength: 3 }}
        placeholder={`0${String.fromCharCode(176)}`}
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

export default HslField;
