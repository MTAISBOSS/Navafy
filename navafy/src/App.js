import * as React from "react";
import Login from "./components/Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from "./components/Pages/Sign Up/Sign_up";
import Artist_Sign_up from "./components/Pages/Artist Sign Up/Artist_Sign_Up";

//import MyHomePage from "./components/Pages/homepages/postexample.js";
//import MyHomePage from "./components/Comment";
import MyHomePage from "./components/Pages/homepages/Guest_Homepage.jsx";
//import Homepage from "./components/Pages/Home Page/Homepage";
//import MyHomePage from "./components/Common/HomePage";
//import MyHomePage from "./components/Pages/Home Page/HomePage.js";
import ProfileEdit from "./components/Pages/Profile Edit/ProfileEdit";
import Playlist from "./components/Pages/Play list/PlayList";
import PostMediaPage from "./components/Pages/Post Media/PostMedia";
import Account from "./components/Pages/Account/Account";
import Account_ChangeInfo from "./components/Pages/Account/Account_ChangeInfo";
import Account_ChangePassword from "./components/Pages/Account/Account_ChangePassword";
import ArtistAccount_ChangeInfo from "./components/Pages/Artist Account/Account_ChangeInfo";
import ArtistAccount_ChangePassword from "./components/Pages/Artist Account/Account_ChangePassword";
import ArtistAccount_Overview from "./components/Pages/Artist Account/Account";
import AddMedia_Test from "./components/Pages/AddMedia_Artist/AddMedia_Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MyHomePage />} />
          <Route exact path="/homepage" element={<MyHomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile_edit" element={<ProfileEdit />} />
          <Route exact path="/signup" element={<Sign_up />} />
          <Route exact path="/artist_signup" element={<Artist_Sign_up />} />
          <Route exact path="/my_music_library" element={<Playlist />} />
          <Route exact path="/music_info" element={<PostMediaPage />} />
          <Route exact path="/account/overview" element={<Account />} />
          <Route exact path="/test" element={<AddMedia_Test />} />
          <Route
            exact
            path="/account/changeinfo"
            element={<Account_ChangeInfo />}
          />
          <Route
            exact
            path="/account/changepassword"
            element={<Account_ChangePassword />}
          />
          <Route
            exact
            path="/account/artist/changeinfo"
            element={<ArtistAccount_ChangeInfo />}
          />
          <Route
            exact
            path="/account/artist/overview"
            element={<ArtistAccount_Overview />}
          />
          <Route
            exact
            path="/account/artist/changepassword"
            element={<ArtistAccount_ChangePassword />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
