import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const BASE_URL = process.env.NODE_ENV === "production" ? "https://itc.iran.liara.run" : "http://localhost:3001";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
