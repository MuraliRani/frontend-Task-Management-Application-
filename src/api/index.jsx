import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-task-management-6ngj.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
});
export default api;
