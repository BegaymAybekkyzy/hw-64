import axios from "axios";
import { BASE_URL } from "./galobalConstatns.ts";

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

export default axiosApi;
