import { Component } from "react";
import MyButton from "../MyButton";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Menu } from "@mui/material";
import { Bloodtype } from "@mui/icons-material";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  getUsername = () => {
    let input = document.getElementById("username").value;
    alert(input);
  };

  render() {
    return (
      <div className="centered">
        <div className="logincontainer shadow">
          <h1>ورود</h1>
          <form>
            <label htmlFor="password">رمز ورود</label>
            <input
              type="password"
              id="password"
              name="password"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
