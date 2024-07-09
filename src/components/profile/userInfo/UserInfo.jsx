import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";

const UserInfo = () => {
  const { user, loading, logoutUser } = useUserContext();

  return (
    <div className="">
      <p className="text-xl hidden lg:flex mt-4 select-none cursor-auto ">
        Hello !
      </p>
      <p className="text-xl mt-2 font-semibold select-none cursor-auto ">
        {user?.displayName}
      </p>

      {/* My profile   */}
      <Link to={"/dashboard"}>
        <p className=" bg-blue-gray-100 flex items-center gap-1 p-2 rounded-md lg:text-lg text-base cursor-pointer font-medium mb-2 mt-5 hover:text-[#fd6b22]">
          <RxDashboard />
          {/* <AiFillDashboard /> */}

          <span>Dashboard</span>
        </p>
      </Link>
      <Link to={"/dashboard/update-profile"}>
        <p className=" bg-blue-gray-100 flex items-center gap-1 p-2 rounded-md lg:text-lg text-base cursor-pointer font-medium mb-2 mt-5 hover:text-[#fd6b22]">
          <FaUserEdit />

          {/* <AiFillDashboard /> */}
          <span>Update Profile</span>
        </p>
      </Link>

      <Btn
        onClick={() => logoutUser()}
        className="mt-4 !bg-[#fd6b22]"
        size={"small"}
        label={"Logout"}
      />
    </div>
  );
};

export default UserInfo;
