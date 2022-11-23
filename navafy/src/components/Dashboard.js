import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={{ fill: "#ff25d7" }} />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          fontFamily: "Vazirmatn",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          "& > :not(style)": { color: "#ff25d7", fontFamily: "Vazirmatn" },
        }}
      >
        <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        <MenuItem onClick={handleClose}> آهنگ های من</MenuItem>
        <MenuItem onClick={handleClose}>پلی لیست من</MenuItem>
        <MenuItem onClick={handleClose}>خروج</MenuItem>
      </Menu>
    </div>
  );
}
