import axios from "axios";

const API = axios.create({
  baseURL: "https://sociopedia-site-qn6j.onrender.com",
});

export const signUp = (formdata) => API.post("/auth/register", formdata);
export const logIn = (formdata) => API.post("/auth/login", formdata);
export const logOut = () => API.get("/auth/logout");
export const getUsers = () => API.get("/user/getusers");
