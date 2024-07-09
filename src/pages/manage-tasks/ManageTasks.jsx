import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Btn from "../../components/button/Btn";
import MySpinner from "../../components/loadingSpinner/Spinner";
import NoDataFound from "../../components/not-found/NoDataFound";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const ManageTasks = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/tasks`);
      return data;
    },
  });
  console.log(tasks);
  if (isLoading) return <MySpinner />;

  if (tasks?.length === 0) {
    return <NoDataFound title={"You Don't have any  product "} />;
  }
  // handleTaskDelete
  async function handleTaskDelete(id) {
    try {
      await axiosCommon.delete(`task/${id}`);
      refetch();
      toast.success("Successfully Deleted", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      toast.success(error.message, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  }

  return (
    <div>
      <div className="flex items-center my-4 gap-1">
        <h1 className="lg:text-4xl font-semibold text-2xl">Manage Tasks</h1>
        <span className="text_pri">{tasks.length}</span>
        <ToastContainer />
      </div>
      <div className="flex flex-col gap-2 ">
        {tasks?.map((task) => {
          return (
            <div className="shadow-md py-2" key={task._id}>
              <div className="flex justify-between gap-4">
                <dir className=" basis-[30%]">
                  <img
                    className="w-[170px] h-[100px] object-cover"
                    src={task.image}
                    alt=""
                  />
                </dir>
                {/* center content box  */}
                <div className="basis-[50%]">
                  <h4 className="text-lg font-semibold">{task.title}</h4>
                  <p>{task.description.slice(0, 80)}</p>
                  {/* icon box  */}
                  <div className="flex items-center gap-4">
                    <Link
                      to={"/dashboard/edit/task"}
                      state={{
                        id: task._id,
                        image: task.image,
                        title: task.title,
                        desc: task.description,
                        assignedTo: task.assignedTo,
                        status: task.status
                      }}
                    >
                      <div className="flex items-center gap-1 cursor-pointer text-blue-500">
                        <FaRegEdit />
                        <span>Edit</span>
                      </div>
                    </Link>

                    <div
                      onClick={() => handleTaskDelete(task._id)}
                      className="flex items-center gap-1 cursor-pointer text-red-500"
                    >
                      <FaRegEdit />
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
                {/* right content box  */}
                <div className="basic[20%]">
                  <Link to={"/dashboard/tasks/details"}>
                    <Btn> View Details </Btn>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageTasks;
