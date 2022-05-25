import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Profile from "./Profile";

const UpdateprofileModal = ({ userinfo,refetch }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        // Handle user Login
       const updateData = {...userinfo,...data};
       axios.post('http://localhost:5000/updateprofile',updateData)
       .then(res=>{
           console.log(res.data);
           refetch();
           toast.success("Data is updated")
           //Do Next thing
           document.getElementById('update-profile-modal').classList.toggle('.modal-open')
       })

       
      };
  return (
    <div className="text-black">
      <input type="checkbox" id="update-profile-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="update-profile-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold capitalize">
            Update your Profile Information
          </h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="card flex-shrink-0 w-full max-w-sm mx-auto bg-base-100">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      class="input input-bordered"
                      value={userinfo.email}
                      readOnly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                    {...register("name",{required:true})}
                      type="text"
                      placeholder="Name"
                      class="input input-bordered"
                      defaultValue={userinfo.name}
                    />
                     <label className="label text-red-400">
                      {errors.name &&  <span className=" label-text text-warning">This filed is required</span> }
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Phone</span>
                    </label>
                    <input
                    {...register("phone",{required:true})}
                      type="text"
                      placeholder="Phone"
                      defaultValue={userinfo.phone}
                      class="input input-bordered"
                    />
                     <label className="label text-red-400">
                      {errors.phone &&  <span className=" label-text text-warning">This filed is required</span> }
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Linkdin</span>
                    </label>
                    <input
                    {...register("linkdin",{required:true})}
                      type="text"
                      placeholder="Linkdin"
                      class="input input-bordered"
                      defaultValue={userinfo.linkdin}
                    />
                     <label className="label text-red-400">
                      {errors.linkdin &&  <span className=" label-text text-warning">This filed is required</span> }
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Education</span>
                    </label>
                    <input
                    {...register("education",{required:true})}
                      type="text"
                      placeholder="education"
                      class="input input-bordered"
                      defaultValue={userinfo.education}
                    />
                     <label className="label text-red-400">
                      {errors.education &&  <span className=" label-text text-warning">This filed is required</span> }
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Adress</span>
                    </label>
                    <textarea
                    {...register("location",{required:true})}
                      type="text"
                      placeholder="location"
                      class="input input-bordered"
                      defaultValue={userinfo.location}
                    />
                    <label className="label text-red-400">
                      {errors.location &&  <span className=" label-text text-warning">This filed is required</span> }
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Update</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default UpdateprofileModal;
