import useAxiosPrivate from "../hooks/useAxiosPrivate";

const postAPICalls = () => {
  const axiosPrivate = useAxiosPrivate();
  const postProfileData = async (allData) => {
    try {
      const { data } = await axiosPrivate.post("/profile", allData);
      return data;
    } catch (error) {
      return error.response?.data || error
    }
  };
  return { postProfileData };
};

export default postAPICalls;
