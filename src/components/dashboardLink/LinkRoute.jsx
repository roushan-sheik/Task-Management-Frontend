import React from "react";
import { NavLink } from "react-router-dom";

const LinkRoute = ({
  children,
  route,

  label,
  icon: Icon,
}) => {
  return (
    <NavLink
      to={route}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive
            ? "border-2 border-[#00a4e5ce] !text-black   rounded-lg"
            : "text-blue-gray-600",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <div className="flex  border-2  border-[rgba(221,221,221,0)] hover:text-black items-center cursor-pointer gap-4  px-2 py-1 rounded-lg  font-semibold">
        <span>
          <Icon className="lg:text-2xl text-xl" />
        </span>
        <span>{children || label}</span>
      </div>
    </NavLink>
  );
};

export default LinkRoute;
