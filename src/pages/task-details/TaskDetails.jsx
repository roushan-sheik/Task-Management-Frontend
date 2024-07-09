import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Btn from "../../components/button/Btn";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const TaskDetails = () => {
  const location = useLocation();
  const axiosCommon = useAxiosCommon();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all_users"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/users`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;

  const { id, title, image, desc, assignedTo, status } = location.state;

  // handleTaskClick
  async function handleTaskClick(email) {
    try {
      await axiosCommon.patch(`/give/task/${id}`, {
        assignedTo: email,
      });
      toast.success("You have given the task", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  }

  return (
    <div className="flex flex-col gap-8 p-12 justify-self-center ">
      <div>
        <h2 className="lg:text-3xl font-semibold text-2xl">{title}</h2>
      </div>
      <ToastContainer />
      <div className="w-[full] h-[300px]  overflow-hidden pr-8">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      {/* user box  */}
      <h2 className="text-2xl text_pri font-semibold">Give task to the User</h2>
      <div className="flex flex-col gap-6">
        {users?.map((user) => {
          const { name, email, photo, role } = user;
          return (
            <div
              className="flex  justify-between gap-8 shadow-lg p-4 border-t-2 border-gray-200 "
              key={user._id}
            >
              {/* profile  */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-s-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={photo}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{name}</h3>
                  <h3>{role}</h3>
                </div>
              </div>
              {/* profile end  */}
              <div>
                <Btn onClick={() => handleTaskClick(email)}>Give The Task</Btn>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskDetails;
