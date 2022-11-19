import { Grid } from "@mui/material";
import Logo from "../../Image/spotify-logo.png";
import Divider from "@mui/material/Divider";
import { SearchBar } from "../SearchBar";
import { useState } from "react";
import ProfileAvatarImage from "../ProfileAvatarImage";
import Dashboard from "../Dashboard";

export const Profile = () => {
  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };
  const data = [
    "بهنام بانی",
    "شجریان",
    "هایده",
    "امینم",
    "توپاک",
    "دریک",
    "شهرام ناظری",
    "مهدی احمدوند",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <Grid container spacing={2} flexDirection="row">
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={1} margin={1}>
            <img className="logo" src={Logo} height="45"></img>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2} margin={1}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Grid>

          <Grid item xs={7} margin={1} />
          <Grid item xs={0} margin={1}>
            <Dashboard />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={1}></Grid>
      </Grid>
      <Divider className="centered" sx={{ backgroundColor: "#d0d0d0"}} />

      <Grid
        container
        spacing={2}
        margin={1}
        marginRight={5}
        flexDirection="row"
      >
        <Grid item xs={12} container spacing={1} >
          <Grid item xs={4}>
            <ProfileAvatarImage />
          </Grid>
          <Grid item xs={2}>
            <p>profile </p>
          </Grid>
          <Grid item xs={2}>
            <p>profile </p>
          </Grid>
          <Grid item xs={2}>
            <p>profile </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
