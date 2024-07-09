import React from "react";

const NoDataFound = ({ title }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-xl lg:text-4xl text_third font-semibold text-center mt-14">
        {title || "You dont have any data "}
      </h2>
      <div className="w-[80px] h-[80px] lg:w-[400px] lg:h-[400px] overflow-hidden">
        <img
          className="w-full h-full "
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default NoDataFound;
