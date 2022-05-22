import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <div className="flex justify-center text-black items-center min-h-screen">
    <h1 className="text-black text-xl uppercase font-bold">Create a Account</h1>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form  onSubmit={handleSubmit(onSubmit)} class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <Link to="/login" class="label-text-alt link link-hover">
                Alrady have an account?
              </Link>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
