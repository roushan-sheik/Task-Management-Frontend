import React from "react";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";
import LoginModal from "../../modal/LoginModal";
import DesktopNav from "../../nav/desktop/DesktopNav";
import Badge from "../../profile/badge/Badge";
import UserInfo from "../../profile/userInfo/UserInfo";

const Header = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const { user, loading } = useUserContext();
  // console.log(user);
  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <div className=" flex justify-between  flex-grow-1 border shadow-sm py-3 lg:px-6 px-2">
      {/* left side main logo  */}
      <Link to={"/"}>Task Management</Link>
      {/*middle position routes  */}
      <div className="lg:basis-[50%] flex items-center">
        {/* desktop nav  */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
      </div>
      {/* right side profile */}
      <div className=" mr-2 cursor-pointer relative">
        {user ? (
          <div onClick={() => setShowInfo(!showInfo)}>
            <Badge image={user.photoURL} />
          </div>
        ) : (
          <Btn onClick={() => setShowForm(true)}>Login</Btn>
        )}
        {showForm && !user && (
          <LoginModal isOpen={showForm} closeModal={() => setShowForm(false)} />
        )}
        {showInfo && user && (
          <div className="z-50 bg-white absolute top-[70px] w-[250px] right-[5px] p-4 rounded-md">
            {/* cancel icon box  */}
            <span
              onClick={() => setShowInfo(!showInfo)}
              className="text-4xl absolute top-1 text_brand_sec right-2"
            >
              <MdOutlineCancelPresentation />
            </span>
            <UserInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
