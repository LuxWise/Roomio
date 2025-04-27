import axios from "axios";

export const api = axios.create({
  baseURL: "http://74.163.185.88:9010/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
