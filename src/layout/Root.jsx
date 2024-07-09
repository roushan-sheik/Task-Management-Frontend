import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";

const Root = () => {
  return (
    <div className="">
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Root;
