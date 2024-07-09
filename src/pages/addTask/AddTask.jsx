import { Input, Textarea } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import { toast, ToastContainer } from "react-toastify";
import { imageUpload } from "../../api/utils";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useUserContext from "../../hooks/useUserContext";

const AddTask = () => {
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const { user } = useUserContext();

  const [task, setTask] = React.useState({
    name: "",
    title: "",
    description: "",
  });
  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  const route = "/dashboard/my-products";

  const currentDate = new Date().toLocaleDateString();

  async function handleSubmit(e) {
    e.preventDefault();
    // get image
    const imagFile = e.target.image.files[0];

    // upload image
    try {
      const imageUrl = await imageUpload(imagFile);
      const productObj = {
        user_name: user?.displayName,
        user_email: user?.email,
        profile_image: user?.photoURL,
        name: product?.name,
        title: product?.title,
        image: imageUrl,
        status: "Pending",
        vote: {
          users: [],
          upVote: 0,
          downVote: 0,
        },
        tags: selected,
        featured: false,
        description: product?.description,
        createdAt: currentDate,
      };
      console.log(productObj);
      await axiosCommon.post("/product/post", productObj);
      toast.success("Product added", {
        position: "top-right",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate(route);
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
      });
    }

    setProduct({
      name: "",
      title: "",
      description: "",
    });

    e.target.reset();
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <title>BitCraft | Add Product</title>
        </Helmet>
        <h2 className=" text_pri lg:text-3xl text-2xl lg:my-10 my-4 font-bold text-center">
          Add Product
        </h2>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col lg:w-[70%] w-[90%] gap-4"
          action="#"
        >
          {/* inputs  */}
          <h1 className="mb-2 font-semibold">Your Name</h1>
          <Input
            disabled
            type="text"
            label={"Your Name"}
            value={user?.displayName}
            placeholder={"Your Name"}
          />
          <h1 className="mb-2 font-semibold">Your Email</h1>
          <Input
            disabled
            type="text"
            label={"Your Email"}
            value={user?.email}
            placeholder={"Your Email"}
          />
          <h1 className="mb-2 font-semibold">Your Photo</h1>
          <Input
            disabled
            type="file"
            placeholder="Your Photo"
            name="your image"
          />
          <Inp
            type="text"
            name={"name"}
            required={true}
            label={"Product Name"}
            value={product.name}
            placeholder={"product name"}
            onChange={handleChange}
          />
          <Inp
            type="text"
            name={"title"}
            required={true}
            label={"Product Title"}
            value={product.title}
            placeholder={"product title"}
            onChange={handleChange}
          />
          {/* ===================== image upload start =================================> */}
          <div>
            <label htmlFor="image" className="block mb-2 text-base font-medium">
              Upload Product Image:
            </label>
            <Inp type="file" id="image" name="image" accept="image/*" />
          </div>
          {/* ===================== image upload end =================================> */}
          <label htmlFor="long_description" className="font-semibold">
            Description
          </label>
          <Textarea
            id="long_description"
            value={product.description}
            placeholder="long desc..."
            onChange={handleChange}
            name="description"
          />
          {/* =================== tags start ========================= */}
          {/* =================== tags start ========================= */}
          <div className=" mb-4 ">
            <h1 className="mb-2 font-semibold">Add Tags</h1>
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="fruits"
              placeHolder="enter tags..."
            />
            <em className="text_brand_pri">
              press enter or comma to add new tag
            </em>
          </div>
          {/* =================== tags start ========================= */}
          {/* submit button  */}
          <Btn className={"mb-10"} type={"submit"} color="blue">
            {" "}
            Continue
          </Btn>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
