import { Button } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogInButton from "../../components/button/LogInButton";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useUserContext();
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // validation
    // Password should be minimum 8 characters
    if (user.password.length < 8) {
      setError("Password should be minimum 8 characters.");
      return;
    }

    // login user
    loginUser(user.email, user.password)
      .then(() => {
        toast.success("Successfully logged in", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate(location?.state || "/");
        }, 3000);
      })

      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });

    setUser({ email: "", password: "" });
    e.target.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title> login</title>
      </Helmet>
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">Login</h2>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4"
        action="#"
      >
        <Inp
          type="text"
          name={"email"}
          value={user.email}
          label={"Email"}
          required={true}
          placeholder={"email"}
          onChange={handleChange}
        />
        <Inp
          type="password"
          name={"password"}
          required={true}
          value={user.password}
          label={"Password"}
          onChange={handleChange}
        />

        {/* error message */}
        <span className="text-red-500">{error}</span>
        {/* submit button  */}

        <Button type={"submit"} color="blue">
          LogIn
        </Button>
        <p className=" text-base text_sec text-center ">
          Do not have an account?
          <Link to="/register">
            <span className="text-sky-500 font-semibold"> Register</span>
          </Link>
        </p>
      </form>
      <p className="text-base  mt-4 mb-2 text_third text-center">
        or signin with
      </p>
      <LogInButton />
    </div>
  );
};

export default Login;
