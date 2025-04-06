import { apiProcessor } from "../../services/api";

// const apiBaseUrl = "http://localhost:8000";
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const userApiEP = apiBaseUrl + "/api/v1/users";

// call api processor to fetch the user
//GET {{rootUrl}}/api/v1/users/profile
export const fetchUserApi = async () => {
  const obj = {
    url: userApiEP + "/profile",
    get: "post",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
