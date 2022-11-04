import { Component } from "react";
import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/b2.jfif";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDeafult();
    console.log({ username, password });
    setPassword("");
    setUsername("");
  };

  const gotoSignUpPage = () => navigate("/signup");
  const gotoHomePage = () => navigate("/");

  const panelstyles = {
    backgroundImage: `url(${background})`,
  };
  const titlestyles = {
    color: "White",
  };
  return (
    <div className="centered">
      <div className="logincontainer shadow" style={panelstyles}>
        <div className="top">
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
                  >
                    برای ساخت حساب اینجا کلیک کنید
                  </a>
                </b>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
