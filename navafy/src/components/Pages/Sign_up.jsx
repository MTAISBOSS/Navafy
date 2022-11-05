import MyButton from "../MyButton";
import MyTextfield from "../MyTextfield";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Image/b2.jfif";

const Sign_up = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_reapet, setPasswordReapet] = useState("");
  const [email, setEmail] = useState("");
  let validationState = "info";
  let isValid = false;
  const navigate = useNavigate();
  const validator = (uname, pass, Email, pass_repeat) => {
    const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const name_regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    const pass_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
    if (true) {
      if (!email_regex.test(Email)) {
        validationState = "error";
      }
      if (!name_regex.test(uname)) {
        validationState = "error";
      }
      if (!pass_regex.test(pass)) {
        validationState = "error";
      }
      if (!pass_regex.test(pass_repeat)) {
        validationState = "error";
      }
      if (pass !== pass_repeat) {
        validationState = "error";
      }
    }
    validationState = "info";
    isValid = true;
  };
  const handleSubmit = (e) => {
    e.preventDeafult();
    setPassword("");
    setUsername("");
    setEmail("");
    setPasswordReapet("");
    validator(
      e.target.username,
      e.target.password,
      e.target.email,
      e.target.pass_repeat
    );
    console.log(this);
  };

  const signupValidation = () => {
    if (isValid) {
      navigate("/");
    }
  };
  const gotoLoginPage = () => navigate("/login");

  const panelstyles = {
    backgroundImage: `url(${background})`,
  };
  const titlestyles = {
    color: "White",
  };

  return (
    <div className="centered">
      <div className="signupcontainer shadow" style={panelstyles}>
        <div className="top shadow">
          <h1 style={titlestyles}>ثبت نام</h1>
        </div>
        <div className="bottom">
          <form className="login" onSubmit={handleSubmit}>
            <MyTextfield
              id="email"
              type="text"
              text="ایمیل"
              name="email"
              required
              variant="standard"
              value={email}
              helperText="لطفا ایمیل خود را پر کنید"
              color={validationState}
              onChange={(e) => setEmail(e.target.value)}
            ></MyTextfield>
            <MyTextfield
              id="username"
              text="نام کاربری"
              type="text"
              name="username"
              variant="standard"
              required
              value={username}
              color={validationState}
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
              color={validationState}
              onChange={(e) => setPassword(e.target.value)}
            ></MyTextfield>
            <MyTextfield
              id="password_repeat"
              type="password"
              text="تکرار رمز"
              name="password_repeat"
              minLength={8}
              required
              variant="standard"
              color={validationState}
              value={password_reapet}
            ></MyTextfield>
            <div className="buttonbottom">
              <MyButton
                btntext="ثبت نام"
                onClick={() => {
                  signupValidation();
                }}
              ></MyButton>
            </div>

            <div>
              <h5>
                <b>
                  <a
                    className="pointer"
                    onClick={() => {
                      gotoLoginPage();
                    }}
                  >
                    <u>برای ورود به اکانت خود اینجا کلیک کنید</u>
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

export default Sign_up;
