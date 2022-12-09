import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props) {
  const items = props.items;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    navigate(e.currentTarget.route);
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
        {items.map((item) => (
          <React.Fragment key={item}>
            <MenuItem
              route={item.route}
              onClick={(e) => {
                handleClose(e);
              }}
              style={{ fontFamily: "Vazirmatn" }}
            >
              {item}
            </MenuItem>
          </React.Fragment>
        ))}
      </Menu>
    </div>
  );
}
