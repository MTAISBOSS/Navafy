import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
        className="persionRtl"
        id={props.id}
        name={props.name}
        type={props.type}
        label={props.text}
        variant={props.variant}
        color={props.color}
        
        helperText={props.helperText}
        autoComplete="on"
        error = {props.error}
        onChange = {props.onChange}
        onBlur = {props.onBlur}
        accept = {props.accept}
        style={props.style}
        ref={props.ref}
        sx={{
          "& > :not(style)": { color: "grey",fontFamily:"Vazirmatn"}
          
        }}
      />
    </Box>
  );
}

export default myTextfield;
