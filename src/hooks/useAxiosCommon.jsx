import axios from "axios";

export const axiosCommon = axios.create({
  baseURL: "https://task-management-backend-eta-flame.vercel.app",
});
const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
