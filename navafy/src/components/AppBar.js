import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Profile } from "./Pages/Profile";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
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
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MyAppBar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const gotoHomePage = () => navigate("/homepage");
  const gotoLibraryPage = () => navigate("/my_music_library");
  const gotoMakePlayListPage = () => navigate("/make_playlist");
  const gotoLikedMusicPage = () => navigate("/liked_music");
  const gotoProfileEditPage = () => navigate("/profile_edit");
  const gotoSignUpPage = () => navigate("/signup");
  const gotoLoginPage = () => navigate("/login");


  const [open, setOpen] = React.useState(false);

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
      <MenuItem
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
      </MenuItem>
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
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <MuiAppBar
          style={{ backgroundColor: "#00cf2d" }}
          open={open}
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }), mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ fontFamily: "Vazirmatn" }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              نوافای
            </Typography>

            <MyButton
              btntext="ثبت نام"
              onClick={()=>{gotoSignUpPage();}}
              variant="contained"
              style={{
                marginLeft: 50,
                backgroundColor: "#00cf2d",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Vazirmatn",
                height: 30,
                width: 80,
                fontSize: 14,
                borderRadius: 5,
              }}
            />
            <MyButton
              btntext="ورود"
              onClick={()=>{gotoLoginPage();}}
              variant="contained"
              style={{
                marginLeft: 20,
                backgroundColor: "#00cf2d",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Vazirmatn",
                height: 30,
                width: 80,
                fontSize: 14,
                borderRadius: 5,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </MuiAppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Main style={{ backgroundColor: "white" }} open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                gotoHomePage();
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <p
                  style={{
                    fontFamily: "Vazirmatn",
                    fontSize: 14,
                    height: 15,
                    fontWeight: "bold",
                  }}
                >
                  صفحه اصلی
                </p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                gotoLibraryPage();
              }}
            >
              <ListItemIcon>
                <LibraryIcon />
              </ListItemIcon>
              <ListItemText>
                <p
                  style={{
                    fontFamily: "Vazirmatn",
                    fontSize: 14,
                    height: 15,
                    fontWeight: "bold",
                  }}
                >
                  کتابخانه من
                </p>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                gotoMakePlayListPage();
              }}
            >
              <ListItemIcon>
                <CreatePlayListIcon />
              </ListItemIcon>
              <ListItemText>
                <p
                  style={{
                    fontFamily: "Vazirmatn",
                    fontSize: 14,
                    height: 15,
                    fontWeight: "bold",
                  }}
                >
                  ایجاد فهرست پخش
                </p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                gotoLikedMusicPage();
              }}
            >
              <ListItemIcon>
                <HeartIcon />
              </ListItemIcon>
              <ListItemText>
                <p
                  style={{
                    fontFamily: "Vazirmatn",
                    fontSize: 14,
                    height: 15,
                    fontWeight: "bold",
                  }}
                >
                  آهنگ های مورد علاقه من
                </p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Search className="shadow pointer" style={{ marginTop: 20 }}>
              <SearchIconWrapper className="pointer" onClick={handleSearch}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={{
                  fontFamily: "Vazirmatn",
                  color: "grey",
                }}
                placeholder="...جستجو"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
