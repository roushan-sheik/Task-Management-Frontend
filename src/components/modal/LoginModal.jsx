import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";
import LogInButton from "../../button/LogInButton";
import Inp from "../../input/Inp";

const LoginModal = ({ closeModal, isOpen, modalHandler }) => {
  const [showPass, setShowPass] = React.useState(false);
  const { loginUser } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // Password should be minimum 8 characters
    if (password.length < 8) {
      toast.error("Password should be minimum 8 characters.", {
        position: "top-center",
      });
      return;
    }
    //TODO - login user
    try {
      await loginUser(email, password);
      toast.success("Successfully logged in", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate(location?.state || "/");
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
    // reset from
    form.email.value = "";
    form.password.value = "";
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-bold my-4 text-center leading-6 text-gray-900"
                >
                  Login
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                  <ToastContainer />
                  <div className="mt-2">
                    <p className="text-lg  font-semibold">Email:</p>
                    <div className="w-full border-2 my-4 flex items-center">
                      <Inp
                        inputStyle={"border-none "}
                        placeholder={"Enter your email"}
                        name={"email"}
                      />
                    </div>
                    <p className="text-lg  font-semibold">Password:</p>
                    <div className="w-full border-2 my-4 flex justify-between pr-4 items-center">
                      <Inp
                        type={`${showPass ? "text" : "password"}`}
                        inputStyle={"border-none "}
                        placeholder={"Enter your password"}
                        name={"password"}
                      />
                      {showPass ? (
                        <IoMdEye
                          className="text-xl cursor-pointer"
                          onClick={() => setShowPass(!showPass)}
                        />
                      ) : (
                        <IoMdEyeOff
                          className="text-xl cursor-pointer"
                          onClick={() => setShowPass(!showPass)}
                        />
                      )}
                    </div>
                  </div>
                  <hr className="mt-8 " />
                  <div className="flex  justify-around">
                    <Btn
                      className="w-[150px]"
                      type="submit"
                      label={"Login"}
                      onClick={modalHandler}
                    />
                    <Btn
                      label={"Cancel"}
                      className="w-[150px] !bg-[#fd6b22] "
                      type="button"
                      onClick={closeModal}
                    />
                  </div>
                  <h4 className="mt-4 text-center">
                    {`Don't have an account?`}
                    <Link onClick={closeModal} to={"/register"}>
                      <span className="font-semibold text_brand_pri">
                        Register
                      </span>
                    </Link>
                  </h4>
                  {/* google login  */}
                  <p className="text-center my-2 text_third">or login with</p>

                  <div className="flex justify-center">
                    <LogInButton />
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

LoginModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  modalHandler: PropTypes.func,
};

export default LoginModal;
