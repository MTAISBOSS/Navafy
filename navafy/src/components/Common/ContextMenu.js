import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function FadeMenu(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [isartist, setisartist] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    handleuseraccount();
  };
  const handleuseraccount = () => {
    if (isartist) {
      navigate("/account/artist/overview");
    } else {
      navigate("/account/overview");
    }
  };
  return (
    <div>
      <IconButton
        style={props.style}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        edge="end"
        aria-label="account of current user"
        color="inherit"
      >
        <AccountCircle style={{ fill: "#00cf2d" }} />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} style={{ fontFamily: "Vazirmatn" }}>
          {"پروفایل من"}
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ fontFamily: "Vazirmatn" }}>
          {"خروج"}
        </MenuItem>
        {/* {items.map((item) => (
          <React.Fragment key={item}>
            <MenuItem onClick={handleClose} style={{ fontFamily: "Vazirmatn" }}>
              {item}
            </MenuItem>
          </React.Fragment>
        ))} */}
      </Menu>
    </div>
  );
}
