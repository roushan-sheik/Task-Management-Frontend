// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useUserContext from "../../hooks/useUserContext";

function LogInButton({ userEmail }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateUserProfile } = useUserContext();
  const { signinWithGoogle } = useUserContext();
  const axiosCommon = useAxiosCommon();

  // google login
  async function handleGoogleLogin() {
    try {
      const result = await signinWithGoogle();

      // create a json web token
      const userObj = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        Role: "user",
        status: "",
      };
      await axiosCommon.post("/users/post", userObj);
      // update profile
      await updateUserProfile(result.user.displayName, result.user.photoURL);
      toast.success("Successfully logged in", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate(location?.state || "/");
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong try again.. ", {
        position: "top-center",
      });
    }
  }

  return (
    <div className=" flex gap-4 flex-col justify-between md:flex-row">
      <ToastContainer />
      <button
        onClick={handleGoogleLogin}
        className="flex gap-2 px-3 py-2 rounded-xl  justify-center items-center bg-white text_pri border-2 "
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
          alt=""
          className="w-4 h-4  "
        />
        <span> Sign in with Google</span>
      </button>
    </div>
  );
}
export default LogInButton;
