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
import Manageuser from "./Components/Admin/Manageuser";
import Requreduser from "./Components/Secure/Requreduser";
import RequredAdmin from "./Components/Secure/RequredAdmin";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Userorders from "./Components/Admin/Userorders";
import Blogs from "./Components/Sections/Blogs/Blogs";

function App() {
  const navigation = useNavigate();
  axios.interceptors.request.use(request=>{
    request.headers.authorization = localStorage.getItem('userToken');
    return request;
  })
  axios.interceptors.response.use(response=>{
    
    if(response.status===404 || response.request.status===404 ){
      navigation('/notfound');
    }
    if(response.status===401 || response.request.status===403 ){
      navigation('/login');
    }
    return response;
  })
  return (
    <div className="App text-white">
      <div className="">
        <div className=" lg:col-start-1 lg:col-end-3 ">
          <Navbar />
        </div>
        <div className="  bg-[#EDF0F6]  ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Requreduser><RequredAdmin><Dashboard/></RequredAdmin></Requreduser>}>
                <Route path="addproduct" element={<Addproduct/>}/>
                <Route path="products" element={<Manageproducts/>}/>
                <Route path="inventory/:id" element={<Editproduct/>}/>
                <Route path="manageuser" element={<Manageuser/>}/>
                <Route path="orders" element={<Userorders/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/resetpwd" element={<Resepassword/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="products/details/:id" element={<Requreduser><ProductDetail/></Requreduser>}/>
            <Route path="/profile" element={<Requreduser><Profile/></Requreduser>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
