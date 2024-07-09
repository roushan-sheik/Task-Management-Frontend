import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";
const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center mt-[100px] h-screen">
      <h2 className="font-bold text-4xl ">404 Page Not Found</h2>
      <div>
        <h1 className="font-bold text-2xl ">Oops!</h1>
        <p className=" my-4 text-red-500">
          Sorry, an unexpected error has occurred.
        </p>
        <Link to={"/"}>
          <Btn color="blue">Go to Home</Btn>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
