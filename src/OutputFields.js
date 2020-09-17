import React from "react";
import { TextField, Typography } from "@material-ui/core";

const OutputFields = () => {
  return (
    <>
      <Typography>RGB</Typography>
      <Typography>#</Typography>
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

export default OutputFields;
