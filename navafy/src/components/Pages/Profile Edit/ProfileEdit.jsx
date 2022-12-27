import * as React from "react";
import { useLocation } from "react-router-dom";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/HomeRounded";
import LibraryIcon from "@mui/icons-material/LibraryMusicRounded";
import CreatePlayListIcon from "@mui/icons-material/AddCircle";
import HeartIcon from "@mui/icons-material/FavoriteRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import MyButton from "../../Common/MyButton";
import Search from "../../Common/Search";
import FadeMenu from "../../Common/ContextMenu";
import Grid from "@mui/material/Grid";
import Dashboard from "../../Common/Dashboard";
import MyAutoComplete from "../../Common/AutoComplete";
import FollowUnfollowContainer from "../../Common/FollowUnfollowContainer";
import { Profile } from "./Profile";
import HomePage from "../../Common/HomePage";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ProfileEdit() {
  const theme = useTheme();
  const navigate = useNavigate();

  const location = useLocation();

  const gotoHomePage = () => navigate("/homepage");
  const gotoLibraryPage = () => navigate("/my_music_library");
  const gotoMakePlayListPage = () => navigate("/make_playlist");
  const gotoLikedMusicPage = () => navigate("/liked_music");
  const gotoProfileEditPage = () => navigate("/profile_edit");
  const gotoSignUpPage = () => navigate("/signup");
  const gotoLoginPage = () => navigate("/login");

  const [homepageContent, sethomepageContent] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [hasLogined, sethasLogined] = React.useState(false);
  const [hasSignedUp, sethasSignedUp] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearch = () => {};
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem
        style={{ fontFamily: "Vazirmatn" }}
        onClick={() => {
          handleMenuClose();
          gotoProfileEditPage();
        }}
      >
        پروفایل
      </MenuItem>
      <MenuItem style={{ fontFamily: "Vazirmatn" }} onClick={handleMenuClose}>
        اکانت من
      </MenuItem>
      <MenuItem
        style={{ fontFamily: "Vazirmatn", color: "red" }}
        onClick={handleMenuClose}
      >
        {" "}
        خروج
      </MenuItem> */}
      <Dashboard />
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <body>
      <HomePage />
      <Profile />
    </body>
  );
}
const options = [
  <FollowUnfollowContainer key="حامد" username="حامد" />,
  <FollowUnfollowContainer key="محمد طاهر" username="محمد طاهر" />,
  <FollowUnfollowContainer key="قاسم" username="قاسم" />,
  <FollowUnfollowContainer key="مجتبی" username="مجتبی" />,
  <FollowUnfollowContainer key="آی نور" username="آی نور" />,
  <FollowUnfollowContainer key="مرتضی" username="مرتضی" />,
];
