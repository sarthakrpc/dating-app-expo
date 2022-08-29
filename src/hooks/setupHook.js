import { useState } from "react";

const setupHook = () => {
  const [data, setData] = useState({
    firstName: "",
    birthDate: new Date(),
    gender: "",
    sexualOrientation: "",
    interests: [],
  });

  const handleData = (formData) => {
    setData((prevData) => ({
      ...prevData,
      ...formData,
    }));
  };

  const returnData = () => {	
	console.log(data);
    return data;
  };

  return { handleData, returnData };
};

export default setupHook;
