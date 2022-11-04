import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MyButton from "../MyButton";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <MyButton btntext="ورود"></MyButton>
        <form>
          <input id="username" required name="username" className="inputfield" type="email"></input>
        </form>
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/"></Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup"></Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default Main;
