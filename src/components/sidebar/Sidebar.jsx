import React from "react";
import { FaIdCard } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import LinkRoute from "../dashboardLink/LinkRoute";

const Sidebar = () => {
  return (
    <div className="bg-white min-h-screen fixed lg:w-80 md:w-64 flex flex-col gap-4 p-10">
      <Link to={"/dashboard"}>
        <div className="flex items-center cursor-pointer gap-4 bg_pri p-2 rounded-lg text-white font-semibold">
          <RxDashboard />
          <span>Dashboard</span>
        </div>
      </Link>
      <LinkRoute label={"Go Home"} route={"/"} icon={IoHomeOutline} />
      <LinkRoute label={"Add Task"} route={"add-task"} icon={MdPostAdd} />
      <LinkRoute
        label={"Manage Users"}
        route={"manage-users"}
        icon={FaUsersGear}
      />
      <LinkRoute
        label={"Manage Tasks"}
        route={"manage-tasks"}
        icon={FaIdCard}
      />
    </div>
  );
};

export default Sidebar;
