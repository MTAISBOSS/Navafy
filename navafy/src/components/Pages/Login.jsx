import { Component } from "react";
import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/hh.gif";
import rightbackground from "../../Image/music-wallpaper.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDeafult();
    setPassword("");
    setUsername("");
  };
  const gotoSignUpPage = () => navigate("/signup");
  const gotoHomePage = () => navigate("/");

  const panelstyles = {
    backgroundImage: `url(${background})`,
  };
  const backgroundstyles = {
    backgroundImage: `url(${rightbackground})`,
  };
  const titlestyles = {
    color: "White",
  };
  return (
    <body>
      <div className="centered">
        <div className="logincontainer shadow" style={panelstyles}>
          <div className="top shadow">
            <h1 style={titlestyles}>ورود</h1>
          </div>
          <div className="bottom">
            <form className="login" onSubmit={handleSubmit}>
              <MyTextfield
                id="username"
                text="نام کاربری"
                type="text"
                name="username"
                variant="standard"
                required
                value={username}
                color="secondary"
                onChange={(e) => setUsername(e.target.value)}
              ></MyTextfield>

              <MyTextfield
                id="password"
                type="password"
                text="رمز ورود"
                name="password"
                minLength={8}
                required
                variant="standard"
                value={password}
                color="secondary"
                onChange={(e) => setPassword(e.target.value)}
              ></MyTextfield>
              <div className="buttonbottom">
                <MyButton
                  btntext="ورود"
                  onClick={() => {
                    gotoHomePage();
                  }}
                ></MyButton>
              </div>

              <div>
                <h5>
                  <b>
                    <a
                      className="pointer"
                      onClick={() => {
                        gotoSignUpPage();
                      }}
                      style={{ color: "rgb(235, 235, 235)" }}
                    >
                      <u>برای ساخت حساب اینجا کلیک کنید</u>
                    </a>
                  </b>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
