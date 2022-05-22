import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Firebase.init";
import {signOut} from 'firebase/auth'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import axios from "axios";

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(Auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigation = useNavigate();
  const onSubmit = (data) => {
    // Handel create user
    if(data.password!==data.cpassword) return;
    createUserWithEmailAndPassword(data.email,data.password);
    if(user){
        const userData = {email:data.email,name:'',education:'',location:'',phone:'',linkdin:''};
        axios.post('http://localhost:5000/user',userData)
        .then(res=>{
           navigation('/login');
        })
    }
  };
  return (
    <div className="flex justify-center text-black items-center min-h-screen">
      <div class="card py-2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-black text-xl uppercase font-bold">
          Create a Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              {...register("email", { required: true })}
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
              type="text"
              placeholder="password"
              class="input input-bordered"
              {...register("password", { required: true })}
            />
            <label className=" label text-sm text-red-500">
              {errors.password && <span>This field is required</span>}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              class="input input-bordered"
              {...register("cpassword", { required: true })}
            />
            <label className=" label text-sm text-red-500">
              {errors.cpassword && <span>This field is required</span>}
              {error && error.message}
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">SIGN UP</button>
            <label class="label">
              <Link to="/login" class="label-text-alt link link-hover">
                Alrady have an account?
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
