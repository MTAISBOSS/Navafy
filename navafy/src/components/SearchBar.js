import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export const SearchBar = ({ setSearchQuery }) => (
  <div>
    <Stack direction="row">
      <TextField
        id="search-bar"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="نام آهنگ یا خواننده"
        variant="outlined"
        placeholder="جستجو..."
        size="small"
        color="secondary"
        sx={{
          "& > :not(style)": { color: "white", fontFamily: "Vazirmatn",borderColor:"white"},
        }}
      />

      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "#ff25d7" }} />
      </IconButton>
    </Stack>
  </div>
);
