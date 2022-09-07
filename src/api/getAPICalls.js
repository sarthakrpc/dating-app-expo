import useAxiosPrivate from "../hooks/useAxiosPrivate";

const getApiCalls = () => {
  const axiosPrivate = useAxiosPrivate();
  const getAllInterests = async () => {
    const { data } = await axiosPrivate.get("/profile/allInterests");
      return data;
  };

  return { getAllInterests };
};

export default getApiCalls;
