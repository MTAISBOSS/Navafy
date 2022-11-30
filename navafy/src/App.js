import ContainedButtons from "./components/MyButton";
import Login from "./components/Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from "./components/Pages/Sign_up";
import Artist_Sign_up from "./components/Pages/Artist_Sign_Up";

import Homepage from "./components/Pages/Homepage.js";
import MyHomePage from "./components/AppBar";
import ProfileEdit from "./components/Pages/ProfileEdit";
import Playlist from "./components/Pages/PlayList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/homepage" element={<MyHomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile_edit" element={<ProfileEdit />} />
        <Route exact path="/signup" element={<Sign_up />} />
        <Route exact path="/artist_signup" element={<Artist_Sign_up />} />
        <Route exact path="/my_music_library" element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
