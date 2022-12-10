import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme, makeStyles } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MyTextfield from "./MyTextfield";
import { PowerInputSharp } from "@mui/icons-material";

export default function ComboBox(props) {
  const items = props.items;

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.key,
  });

  return (
    <Autocomplete
      className={props.className}
      size={"small"}
      disablePortal
      id="combo-box-demo"
      options={items}
      sx={props.sx}
      filterOptions={filterOptions}
      style={props.style}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          sx={{
            "& > :not(style)": {
              color: "grey",
              fontFamily: "Vazirmatn",
              width: props.style.width,
              height: props.style.height,
            },
          }}
          {...params}
          size={"small"}
          placeholder={props.label}
        />
      )}
    />
  );
}
