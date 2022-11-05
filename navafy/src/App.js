import ContainedButtons from "./components/MyButton";
import Login from "./components/Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_up from "./components/Pages/Sign_up";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Sign_up />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
