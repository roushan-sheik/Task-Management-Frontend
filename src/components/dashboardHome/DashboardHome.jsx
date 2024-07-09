import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import useRole from "../../hooks/useRole";

const DashboardHome = () => {
  const role = useRole();
  return (
    <div>
      <div className="flex lg:mt-8 mt-16 items-center gap-1 text-2xl lg:text-4xl font-bold">
        <img
          className="h-[80px] w-[80px]"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/login-credentials-7666316-6220856.png?f=webp"
          alt=""
        />
        <span>{role.role}</span>
        <h2>Dahboard</h2>

        <MdAdminPanelSettings className="text_brand_pri" />
      </div>
      {/* Mod Home  */}
    </div>
  );
};

export default DashboardHome;
