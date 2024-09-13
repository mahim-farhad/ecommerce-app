import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_URL}`,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.BACKEND_API}`,
  },
  next: { revalidate: 10 },
});

export default axiosInstance;
