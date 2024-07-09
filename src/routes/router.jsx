import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Root from "../layout/Root";
import AddTask from "../pages/addTask/AddTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ManageTasks from "../pages/manage-tasks/ManageTasks";
import ManageUsers from "../pages/manage-users/ManageUsers";
import MyTasks from "../pages/mytasks/MyTasks";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import DashboardHome from "./../components/dashboardHome/DashboardHome";
import PrivateRoute from "./privet/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },

      {
        path: "/my-tasks",
        element: (
          <PrivateRoute>
            <MyTasks />,
          </PrivateRoute>
        ),
      },

      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <Dashboard />
      // </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "manage-tasks",
        element: <ManageTasks />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);
export default router;
