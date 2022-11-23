import { PeopleSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/Forum";
import Key from "@mui/icons-material/KeyRounded";

function myTextfield(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={props.id}
        name={props.name}
        type={props.type}
        label={props.text}
        variant={props.variant}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        color={props.color}
        helperText={props.helperText}
        autoComplete="on"
        style={props.style}
        hidden={props.hidden}
        sx={{
          "& > :not(style)": { color: "grey", fontFamily: "Vazirmatn" },
        }}
      />
    </Box>
  );
}

export default myTextfield;
