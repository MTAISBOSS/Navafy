import * as React from "react";
import Login from "./components/Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from "./components/Pages/Sign Up/Sign_up";
import Artist_Sign_up from "./components/Pages/Artist Sign Up/Artist_Sign_Up";

import MyHomePage from "./components/Pages/homepages/Artist_Homepage.jsx";
//import MyHomePage from "./components/Pages/homepages/Guest_Homepage.jsx";
//import Homepage from "./components/Pages/Home Page/Homepage";
//import MyHomePage from "./components/Common/HomePage";
//import MyHomePage from "./components/Pages/Home Page/HomePage.js";
import ProfileEdit from "./components/Pages/Profile Edit/ProfileEdit";
import Playlist from "./components/Pages/Play list/PlayList";

function App() {
  return (
    <div>
      {/* {isLogin ? sss : ss} */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MyHomePage />} />
          <Route exact path="/homepage" element={<MyHomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile_edit" element={<ProfileEdit />} />
          <Route exact path="/signup" element={<Sign_up />} />
          <Route exact path="/artist_signup" element={<Artist_Sign_up />} />
          <Route exact path="/my_music_library" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
