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

export const uploadPost = (formdata) => API.post("/post/uploadpost", formdata);
export const getAllPosts = () => API.get("/post/getallposts");
export const getPostUrl = () => API.get("/post/getpostsurl");
export const likePost = (formdata) => API.put("/post/likepost", formdata);
