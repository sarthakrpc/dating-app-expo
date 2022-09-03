import useAxiosPrivate from "../hooks/useAxiosPrivate";

const getAllInterests = async () => {
  const axiosPrivate = useAxiosPrivate();
  const { data } = await axiosPrivate.get("/profile/allInterests");
  return data;
};

export { getAllInterests };
