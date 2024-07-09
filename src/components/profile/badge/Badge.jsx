import React from "react";

const Badge = ({ image }) => {
  return (
    <div>
      <div className="relative group">
        <img
          className="size-[50px] ring-2 ring-[#fd6b22] bg-slate-500 object-cover rounded-full"
          src={image}
          alt="avatar navigate ui"
        />
        <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
        <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
      </div>
    </div>
  );
};

export default Badge;
