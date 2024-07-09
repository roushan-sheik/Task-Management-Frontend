import { Helmet } from "react-helmet-async";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";
import useUserContext from "../../hooks/useUserContext";

const Profile = () => {
  const { user } = useUserContext();

  return (
    <div className="max-w-6xl mx-auto ">
      <Helmet>
        <title>Your - Profile</title>
      </Helmet>
      <div className="flex flex-col items-center my-16">
        <img
          className="rounded-full h-[200px] w-[200px] ring-8 ring-blue-500"
          src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
          alt="pic"
        />
        <h2 className="mt-6 font-medium text-4xl">{user?.displayName}</h2>
        <p className="text-lg mt-3">{user?.email}</p>

        <Link to={"/profile/edit"}>
          <Btn className={"flex items-center gap-2 mt-2"}>
            <FaUserEdit />
            Edit
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
