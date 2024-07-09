import React from "react";
import { NavLink } from "react-router-dom";
const DesktopNav = () => {
  return (
    <div className="flex items-center gap-7">
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/my-tasks"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        My Tasks
      </NavLink>
    </div>
  );
};

export default DesktopNav;
