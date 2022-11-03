import { Component } from "react";
import { Router } from "react-router-dom";
import { Route, Redirect, Routes } from "react-router-dom";
import Login from "./Login";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <Router>
          <Routes>
            <Route exact path="/"></Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup"></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Main;
