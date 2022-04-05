import React from "react";

import axios from "../axios/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get("/auth/refreshToken");
    console.log("The response in refresh is ");
    console.log(response);
    setAuth((prev) => {
      return {
        ...prev,
        username: response.data.user.username,
        accessToken: response.data.accessToken,
        role: response.data.role,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
