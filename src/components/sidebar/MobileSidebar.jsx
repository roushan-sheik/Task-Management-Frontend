import { Drawer, IconButton, List } from "@material-tailwind/react";
import React from "react";
import { FaBars, FaIdCard, FaRegUser } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoBagAddOutline, IoHomeOutline } from "react-icons/io5";
import { MdPostAdd, MdReport } from "react-icons/md";
import { PiQueueFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";
import Btn from "../button/Btn";
import LinkRoute from "../dashboardLink/LinkRoute";

function MobileSidebar() {
  const Admin = "Admin";
  const Moderator = "Moderator";
  const role = useRole();
  const [open, setOpen] = React.useState(true);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Btn className="absolute m-5" onClick={openDrawer}>
        <FaBars />
      </Btn>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <Link to={"/dashboard"}>
            <div className="flex items-center cursor-pointer gap-4 bg_pri p-2 rounded-lg text-white font-semibold">
              <RxDashboard />
              <span>Dashboard</span>
            </div>
          </Link>

          <LinkRoute label={"Go Home"} route={"/"} icon={IoHomeOutline} />
          <LinkRoute
            label={"My Profile"}
            route={"my-profile"}
            icon={FaRegUser}
          />
          <LinkRoute
            label={"Add Product"}
            route={"add-product"}
            icon={MdPostAdd}
          />
          <LinkRoute
            label={"My Products"}
            route={"my-products"}
            icon={IoBagAddOutline}
          />
          {(role === Admin || role === Moderator) && (
            <LinkRoute
              label={"Product Queue"}
              route={"product-review-queue"}
              icon={PiQueueFill}
            />
          )}

          {role === "Admin" && (
            <LinkRoute
              label={"Statistics Page"}
              route={"statistics"}
              icon={FcStatistics}
            />
          )}
          {role === "Admin" && (
            <LinkRoute
              label={"Manage Users"}
              route={"manage-users"}
              icon={FaUsersGear}
            />
          )}
          {(role === Admin || Moderator) && (
            <LinkRoute
              label={"Manage Coupons"}
              route={"manage-coupons"}
              icon={FaIdCard}
            />
          )}
          {(role === Admin || role === Moderator) && (
            <LinkRoute
              label={"Reported Contents"}
              route={"reported-contents"}
              icon={MdReport}
            />
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
export default MobileSidebar;
