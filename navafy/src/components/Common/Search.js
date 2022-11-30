import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export default function Search(props) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: props.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.6),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing(0),
    marginLeft: props.marginLeft,
    marginTop:props.marginTop,
    width: "100px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: props.width,
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(12)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: props.width,
      },
    },
  }));

  return (
    <Search className="whiteshadow">
      <SearchIconWrapper >
        <SearchIcon style={props.searchIconStyle} onClick={props.onClick} />
      </SearchIconWrapper>
      <StyledInputBase
        style={{
          fontFamily: "Vazirmatn",
          color: props.color,
        }}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
