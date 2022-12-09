import * as React from "react";
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
import { Grid } from "@mui/material";
import Dashboard from "../../Common/Dashboard";
import MyAutoComplete from "../Psot Media/PostMedia";
import FollowUnfollowContainer from "../../Common/FollowUnfollowContainer";
import PostMediaPopUp from "../../Common/PostMedia";

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
      <Box sx={{ display: "flex", backgroundColor: "#2b2135" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#110d15" }}
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
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
              disabled={hasSignedUp}
              btntext="ثبت نام"
              onClick={() => {
                gotoSignUpPage();
              }}
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
              disabled={hasLogined}
              btntext="ورود"
              onClick={() => {
                gotoLoginPage();
              }}
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
            <Search
              style={{
                borderRadius: "none",
                width: 300,
                height: 40,
                marginLeft: 250,
                backgroundColor: "white",
                color: "grey",
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <FadeMenu items={["اکانت من", "پروفایل", "خروج"]} />
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
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon style={{ fill: "white" }} />
              ) : (
                <ChevronRightIcon style={{ fill: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider style={{ backgroundColor: "white" }} />

          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  gotoHomePage();
                }}
              >
                <ListItemIcon>
                  <HomeIcon style={{ fill: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <p
                    style={{
                      fontFamily: "Vazirmatn",
                      fontSize: 14,
                      height: 15,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    صفحه اصلی
                  </p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider style={{ backgroundColor: "white" }} />

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  gotoLibraryPage();
                }}
              >
                <ListItemIcon>
                  <LibraryIcon style={{ fill: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <p
                    style={{
                      fontFamily: "Vazirmatn",
                      fontSize: 14,
                      height: 15,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    کتابخانه من
                  </p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider style={{ backgroundColor: "white" }} />

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  gotoMakePlayListPage();
                }}
              >
                <ListItemIcon>
                  <CreatePlayListIcon style={{ fill: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <p
                    style={{
                      fontFamily: "Vazirmatn",
                      fontSize: 14,
                      height: 15,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    ایجاد فهرست پخش
                  </p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider style={{ backgroundColor: "white" }} />

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  gotoLikedMusicPage();
                }}
              >
                <ListItemIcon>
                  <HeartIcon style={{ fill: "white" }} />
                </ListItemIcon>
                <ListItemText>
                  <p
                    style={{
                      fontFamily: "Vazirmatn",
                      fontSize: 14,
                      height: 15,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    آهنگ های مورد علاقه من
                  </p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Search
                items={options}
                style={{
                  marginTop: 10,
                  borderRadius: "0px",
                  width: "100%",
                  backgroundColor: "white",
                  color: "grey",
                }}
              />
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {/* <PostMediaPage musicName="Blinding Lights" singer="The Weekend"/> */}
          {/* Contents should be here */}
        </Main>
      </Box>
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