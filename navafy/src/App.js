<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import ContainedButtons from "./components/MyButton";
import Login from "./components/Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from "./components/Pages/Sign_up";
import Artist_Sign_up from "./components/Pages/Artist_Sign_Up";


import Homepage from "./components/Pages/Homepage.js";
import { Profile } from "./components/Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Sign_up />} />
        <Route exact path="/artist_signup" element={<Artist_Sign_up />} />

      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
