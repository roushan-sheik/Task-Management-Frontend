import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { imageUpload } from "../../api/utils";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";

const UpdateProfile = () => {
  const { user, updateUserProfile, setLoading } = useUserContext();

  const navigate = useNavigate();
  // submit func

  // submit func
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);
      // console.log(image_url);
      // 3. Save username and photo in firebase
      await updateUserProfile(name, image_url);
      setLoading(false);
      navigate("/profile");
      toast.success("register Successful");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="max-w-6xl mx-auto my-8 ">
      <Helmet>
        <title>User - Update Profile</title>
      </Helmet>
      <ToastContainer />
      <div className="mt-8 ">
        <div className="flex flex-col items-center ">
          <img
            className="rounded-full w-[150px] h-[150px]"
            src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
            alt="pic"
          />
          <h2 className="my-5 font-medium text-4xl">{user?.displayName}</h2>
          <p className="text-lg mb-2">{user?.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="card-body rounded-md mt-4 lg:w-50%] w-[90%] mx-auto border"
          >
            <div className="border-2 flex gap-2 p-2 rounded-md mb-4">
              <label className="label font-semibold">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered focus:outline-none rounded-md"
              />
            </div>
            <div className="border-2 flex gap-2 p-2 rounded-md">
              <label
                htmlFor="image"
                className="block mb-2 text-base font-medium"
              >
                Select Image:
              </label>
              <Inp type="file" id="image" name="image" accept="image/*" />
            </div>
            <div className="form-control mt-6">
              <Btn type="submit" color="blue" className="w-full  ">
                Save Changes
              </Btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
