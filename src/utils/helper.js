import axios from "axios";

const host = "192.168.0.19";
const port = 3002;
export const axiosInstance = axios.create({
  baseURL: `http://${host}:${port}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  axiosInstance,
};
