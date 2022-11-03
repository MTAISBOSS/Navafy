import ContainedButtons from "./components/MyButton";
import Login from "./components/Pages/Login";
import { Router } from "react-router-dom";
import { Route, Redirect, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
