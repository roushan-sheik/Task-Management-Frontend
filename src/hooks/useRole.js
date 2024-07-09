import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useUserContext from "./useUserContext";
const useRole = () => {
  const { user, loading } = useUserContext();
  const axiosCommon = useAxiosCommon();

  const { data: role = "" } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/user/role/${user?.email}`);
      return data;
    },
  });

  //   Fetch user info using logged in user email

  return role;
};

export default useRole;
