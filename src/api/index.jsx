import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-v9sb.onrender.com/api",
});
export default api;
