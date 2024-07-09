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
        to="/products"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        News
      </NavLink>
    </div>
  );
};

export default DesktopNav;
