import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useUserContext from "../../hooks/useUserContext";

const MyTasks = () => {
  const { user } = useUserContext();
  const axiosCommon = useAxiosCommon();
  const {
    data: mytasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my_tasks"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/tasks/${user?.email}`);

      return data;
    },
  });
  console.log(mytasks);

  if (isLoading) return <MySpinner />;

  // change status
  async function changeStatus(status, id) {
    try {
      await axiosCommon.put(`/status/${id}`, { status });
      refetch();
      toast.success("Status Changed", {
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
    <div className="lg:px-14 px-4">
      <ToastContainer />
      <div className="flex items-center my-4 gap-1">
        <h1 className="lg:text-3xl font-semibold text-2xl">Manage Tasks</h1>
        <div className=" flex justify-center items-center text-white text-2xl bg-blue-500 h-10 w-10 rounded-full">
          {mytasks?.length}
          <span></span>
        </div>
      </div>
      {/* task containter  */}
      <div className="flex flex-col gap-6">
        {mytasks?.map((task) => {
          return (
            <div
              className="flex lg:flex-row flex-col gap-4 p-4 border"
              key={task._id}
            >
              <div className="  basis-[40%]">
                <div className="h-[200px]">
                  <img
                    className="w-full h-full object-cover"
                    src={task?.image}
                    alt=""
                  />
                </div>
                {/* status icon box  */}
                <div className="mt-4">
                  <div className="flex gap-1 items-center">
                    <GrStatusDisabledSmall className="text-blue-500" />
                    <h2 className="font-semibold">Status:</h2>
                    <span>{task?.status}</span>
                  </div>
                  {/* select input  */}
                  <div className="mt-6">
                    <div className="flex gap-10">
                      <Button
                        onClick={() => changeStatus("To-Do", task._id)}
                        color="blue"
                      >
                        To-Do
                      </Button>
                      <Button
                        onClick={() => changeStatus("In Progress", task._id)}
                        color="blue"
                      >
                        In Progress
                      </Button>
                      <Button
                        onClick={() => changeStatus("Completed", task._id)}
                        color="blue"
                      >
                        Completed
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* content box  */}
              <div className="basis-[60%]">
                <div>
                  <h2 className="lg:text-3xl text-2xl font-semibold mb-2 ">
                    {task?.title}
                  </h2>
                  <p>{task?.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;
