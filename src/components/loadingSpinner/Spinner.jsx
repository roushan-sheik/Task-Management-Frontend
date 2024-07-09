import { Spinner } from "@material-tailwind/react";
import React from "react";

const MySpinner = () => {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default MySpinner;
