import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Auth from "../Firebase.init";
import { useEffect } from "react";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(Auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(Auth);
    if(!gloading && !gerror && guser){
      if(guser){
        console.log(guser);
        const userData = {email:guser.user.email,name:'',education:'',location:'',phone:'',linkdin:''};
        console.log(userData);
        axios.post('https://menufeture.herokuapp.com/user',userData)
        .then(res=>{
          reset();
          const data = {email:guser.user.email};
          axios.post('https://menufeture.herokuapp.com/login',data)
          .then((res)=>{
              if(res.data.token){
              localStorage.setItem("userToken",res.data.token);
              localStorage.setItem("userId",res.data.id);
              console.log(res);
              navigate(from, { replace: true });
              }
            
          })
        })
    }
    }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle user Login
    signInWithEmailAndPassword(data.email, data.password);
  };
  useEffect(() => {
    if (!loading && user) {
      reset();
      const data = {email:user.user.email};
      axios.post('https://menufeture.herokuapp.com/login',data)
      .then((res)=>{
          if(res.data.token){
          localStorage.setItem("userToken",res.data.token);
          localStorage.setItem("userId",res.data.id);
          console.log(res);
          navigate(from, { replace: true });
          }
        
      })
     
    }
  }, [user]);
  

  return (
    <div className="flex justify-center text-black items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="card flex-shrink-0 py-2 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <h1 className="text-black text-xl uppercase font-bold">LOG IN</h1>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: true })}
              class="input input-bordered"
            />
            <label className=" label text-sm text-red-500">
              {errors.email && <span>This field is required</span>}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              class="input input-bordered"
            />
            <label className=" label text-sm text-red-500">
              {errors.password && <span>This field is required</span>}
              {error?.message && <span>{error.message}</span>}
            </label>
            <label class="label">
              <Link to="/resetpwd" class="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Login</button>
            <label className="label-text-alt link link-hover text-left py-2">
              <Link to="/signup">Create a new account</Link>
            </label>
          </div>
          <div class="divider">OR</div>
          <button type="button" className="btn" onClick={()=>{ signInWithGoogle()}}>CONTINUE WITH GOOGLE</button>
        </div>
        

      </form>
    </div>
  );
};

export default Login;
