import React from "react";
import { NavLink } from "react-router-dom";
const DesktopNav = () => {
  return (
    <div className="flex items-center gap-7">
      {" "}
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
        to="/tasks"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Tasks
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Add Task
      </NavLink>
    </div>
  );
};

export default DesktopNav;
