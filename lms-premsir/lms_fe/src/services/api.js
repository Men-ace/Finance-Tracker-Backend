import axios from "axios";
import { toast } from "react-toastify";
import { fetchNewAccessJWTApi } from "./authAPI";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivateCall,
  isRefreshJWT,
}) => {
  try {
    const headers = {};

    if (isPrivateCall) {
      const token = isRefreshJWT ? getRefreshJWT() : getAccessJWT();
      headers.authorization = "bearer " + token;
      if (!token)
        return alert("Plese sign out and Log in again to make this requst");
    }

    const responsePending = axios({
      url,
      method,
      data: payload,
      headers,
    });

    //shwo toast message
    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait....",
      });
    }
    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);

    if (error.status === 401) {
      if (msg === "jwt expired") {
        //call api to get new accessJWT
        const { payload } = await fetchNewAccessJWTApi();
        if (payload) {
          sessionStorage.setItem("accessJWT", payload);
          // call the apiProcessor()
          return apiProcessor({
            url,
            method,
            payload,
            showToast,
            isPrivateCall,
            isRefreshJWT,
          });
        }
      } else {
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("refreshJWT");
      }
    }
    return {
      status: "error",
      message: msg,
    };
  }
};
