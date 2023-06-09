import axios from "axios";

const API = axios.create({
  baseURL: "https://sociopedia-site-qn6j.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    req.headers.Authorization = `Bearer ${token.token}`;
    return req;
  }
});

export const getAllUsers = () => API.get("/user/getusers");
export const getMyProfile = () => API.get("/user/me");
export const followUpdate = (ids) => API.post("user/followuser", ids);
export const updateUser = (id, formdata) =>
  API.put(`/user/updateuser/${id}`, formdata);
