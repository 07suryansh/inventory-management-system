import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/UserDashboard";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import VendorItemAdd from "./Components/VendorItemAdd";

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      {/* <Login /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/vendoritemadd" element={<VendorItemAdd/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
