import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function MyButton(props) {
  return (
    <Button
      autoFocus = {props.autoFocus}
      variant={props.variant}
      style={props.style}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      sx={{
        "& > :not(style)": { fontFamily: "Vazirmatn" },
      }}
    >
      {props.btntext}
    </Button>
  );
}
