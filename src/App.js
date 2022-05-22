import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Sections/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Sections/Home/Home";
import Dashboard from "./Components/Admin/Dashboard";
import Addproduct from "./Components/Sections/Products/Addproduct";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Resepassword from "./Components/User/Resepassword";

function App() {
  return (
    <div className="App text-white">
      <div className=" grid grid-col-1 lg:grid-cols-12">
        <div className=" lg:col-start-1 lg:col-end-3 ">
          <Navbar />
        </div>
        <div className="  bg-[#EDF0F6] lg:col-start-3 lg:col-end-13 ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="addproduct" element={<Addproduct/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/resetpwd" element={<Resepassword/>}/>
          </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
