import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme, makeStyles } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MyAutoComplete from "./AutoComplete";

export default function Search(props) {
  
  return (
    <MyAutoComplete
      items={props.items}
      className="whiteshadow"
      style={props.style}
      label="...جستجو"
    />
    
  );
}

