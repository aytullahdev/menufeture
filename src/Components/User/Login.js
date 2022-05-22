import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Auth from "../Firebase.init";
const Login = () => {
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle user Login
    console.log(data);
  };
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
              type="text"
              placeholder="password"
              {...register("password", { required: true })}
              class="input input-bordered"
            />
            <label className=" label text-sm text-red-500">
              {errors.password && <span>This field is required</span>}
            </label>
            <label class="label">
              <Link to="/resetpwd" class="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
            <label className="label-text-alt link link-hover text-left py-2">
              <Link to="/signup">Create a new account</Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
