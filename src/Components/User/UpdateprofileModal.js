import React from "react";
import { useForm } from "react-hook-form";

const UpdateprofileModal = ({ userinfo }) => {
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
                    {...register("name")}
                      type="text"
                      placeholder="Name"
                      class="input input-bordered"
                      defaultValue={userinfo.name}
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Phone</span>
                    </label>
                    <input
                    {...register("phone")}
                      type="text"
                      placeholder="Phone"
                      defaultValue={userinfo.phone}
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Linkdin</span>
                    </label>
                    <input
                    {...register("linkdin")}
                      type="text"
                      placeholder="Linkdin"
                      class="input input-bordered"
                      defaultValue={userinfo.linkdin}
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Adress</span>
                    </label>
                    <textarea
                    {...register("adress")}
                      type="text"
                      placeholder="Your adress"
                      class="input input-bordered"
                      defaultValue={userinfo.adress}
                    />
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
