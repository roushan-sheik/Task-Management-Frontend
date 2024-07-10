import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import MySpinner from "../../components/loadingSpinner/Spinner";
import NoDataFound from "../../components/not-found/NoDataFound";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const ManageUsers = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage_users"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/users`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;

  if (users?.length === 0) {
    return <NoDataFound title={"You Don't have any  tasks "} />;
  }
  // handleRoleChange
  function handleRoleChange(role) {
    alert(role);
  }

  // console.log(users);
  return (
    <div className="lg:mx-12">
      <div className="flex items-center my-4 gap-1">
        <h1 className="lg:text-4xl font-semibold text-2xl">Manage Users</h1>
        <div className=" flex justify-center items-center text-white text-2xl bg-blue-500 h-12 w-12 rounded-full">
          {users.length}
          <span></span>
        </div>
      </div>
      {/* header end  */}
      <div className="flex flex-col gap-6 shadow-lg p-4 ">
        {users?.map((user) => {
          return (
            <div className="flex  gap-2 justify-between" key={user._id}>
              <div className="flex  gap-2">
                <div className="w-[70px] h-[70px]">
                  <img
                    className="w-full h-full rounded-md"
                    src={user.photo}
                    alt="User"
                  />
                </div>
                <div>
                  <div className="flex gap-1">
                    <h2 className="font-medium">{user?.name}</h2>
                    {user.role === "Admin" ? (
                      <span className="text-blue-500 text-2xl">
                        <MdAdminPanelSettings />
                      </span>
                    ) : (
                      <span className="text-blue-500 text-1xl">
                        <FaUser />
                      </span>
                    )}
                  </div>
                  <div>
                    <h2>{user?.email}</h2>
                  </div>
                </div>
              </div>
              {/* button box  */}
              <div>
                <Button
                  onClick={() =>
                    handleRoleChange(
                      `${user.role === "Admin" ? "User" : "Admin"}`
                    )
                  }
                  className={`${
                    user.role === "Admin" ? "bg_sec" : "bg-blue-500"
                  } flex items-center gap-1`}
                >
                  {user.role === "Admin" ? (
                    <span className="text-xl">
                      <FaUser />
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <MdAdminPanelSettings />
                    </span>
                  )}

                  {user.role === "Admin" ? "Make User" : "Make Admin"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageUsers;
