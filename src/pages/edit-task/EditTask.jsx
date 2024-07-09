import { Textarea } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { imageUpload } from "../../api/utils";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const EditTask = () => {
  const location = useLocation();
  const { id, title, image, desc, assignedTo, status } = location.state;
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();

  const [task, setTask] = React.useState(
    {
      title,
      description: desc,
    } || { title: "", description: "" }
  );
  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  const route = "/dashboard/manage-tasks";

  async function handleSubmit(e) {
    e.preventDefault();
    // get image
    const imagFile = e.target.image.files[0];

    // upload image
    try {
      let imageUrl;
      if (imagFile) {
        imageUrl = await imageUpload(imagFile);
      }
      const productObj = {
        title: task?.title,
        image: imageUrl || image,
        description: task?.description,
        status: status || "To-Do",
        assignedTo: assignedTo || [],
      };
      console.log(productObj);
      await axiosCommon.put(`/task/${id}`, productObj);
      toast.success("Task Updated", {
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

    setTask({
      title: "",
      description: "",
    });

    e.target.reset();
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <title>BitCraft | Add Task</title>
        </Helmet>
        <h2 className=" text_pri lg:text-3xl text-2xl lg:my-10 my-4 font-bold text-center">
          Add Task
        </h2>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col lg:w-[70%] w-[90%] gap-4"
          action="#"
        >
          {/* inputs  */}
          <Inp
            type="text"
            name={"title"}
            required={true}
            label={"Product Title"}
            value={task.title}
            placeholder={"product title"}
            onChange={handleChange}
          />
          {/* ===================== image upload start =================================> */}
          <div>
            <label htmlFor="image" className="block mb-2 text-base font-medium">
              Upload Task Image:
            </label>
            <Inp type="file" id="image" name="image" accept="image/*" />
          </div>
          {/* ===================== image upload end =================================> */}
          <label htmlFor="long_description" className="font-semibold">
            Description
          </label>
          <Textarea
            id="long_description"
            value={task.description}
            placeholder="long desc..."
            onChange={handleChange}
            name="description"
          />

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

export default EditTask;
