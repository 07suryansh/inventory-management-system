import { Routes,Route } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
