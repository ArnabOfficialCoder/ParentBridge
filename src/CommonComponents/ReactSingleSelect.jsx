import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SingleSelect = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelect;
