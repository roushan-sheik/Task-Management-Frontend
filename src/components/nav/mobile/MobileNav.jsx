import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive
              ? "text_brand_sec text-lg cursor-pointer font-medium"
              : "text-lg cursor-pointer font-medium",
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
            isActive
              ? "text_brand_sec text-lg cursor-pointer font-medium"
              : "text-lg cursor-pointer font-medium",
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
            isActive
              ? "text_brand_sec text-lg cursor-pointer font-medium"
              : "text-lg cursor-pointer font-medium",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        News
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive
              ? "text_brand_sec text-lg cursor-pointer font-medium"
              : "text-lg cursor-pointer font-medium",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Community
      </NavLink>
    </>
  );
};

export default MobileNav;
