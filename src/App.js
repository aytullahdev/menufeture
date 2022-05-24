import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Sections/Header/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Sections/Home/Home";
import Dashboard from "./Components/Admin/Dashboard";
import Addproduct from "./Components/Sections/Products/Addproduct";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Resepassword from "./Components/User/Resepassword";
import Products from "./Components/Sections/Products/Products";
import ProductDetail from "./Components/Sections/Products/ProductDetail";
import Notfound from "./Components/Errorpage/Notfound";
import Manageproducts from "./Components/Sections/Products/Manageproducts";
import axios from "axios";
import Profile from "./Components/User/Profile";
import Editproduct from "./Components/Sections/Products/Editproduct";

function App() {
  const navigation = useNavigate();
  axios.interceptors.request.use(request=>{
   
    return request;
  })
  axios.interceptors.response.use(response=>{
    
    if(response.status===404 || response.request.status===404 ){
      navigation('/notfound');
    }
    return response;
  })
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
                <Route path="products" element={<Manageproducts/>}/>
                <Route path="inventory/:id" element={<Editproduct/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/resetpwd" element={<Resepassword/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="products/details/:id" element={<ProductDetail/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
