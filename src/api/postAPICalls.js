import useAxiosPrivate from "../hooks/useAxiosPrivate";

const postAPICalls = () => {
  const axiosPrivate = useAxiosPrivate();
  const postProfileData = async (allData) => {
    try {
      const { data } = await axiosPrivate.post("/profile", allData);
      return data;
    } catch (error) {
	if(error.response.status === 502){
		return "Unexpected server error"
	}
      return error.response?.data.message
    }
  };
  return { postProfileData };
};

export default postAPICalls;
