import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Resepassword = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        // Handle user reset
        console.log(data);
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
          <div class="form-control mt-6">
            <button class="btn btn-primary">SEND MAIL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resepassword;
