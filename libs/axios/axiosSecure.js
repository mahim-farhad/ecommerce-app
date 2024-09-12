import getAuthToken from '@utils/services/auth-token';

const axiosSecure = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
  }
});

axiosSecure.interceptors.request.use(async function (config) {
  const authToken = await getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    return Promise.reject(new Error("No token found, request might fail!"));
  }

  return config;
}, function (error) { return Promise.reject(error); });

axiosSecure.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    return Promise.reject(new Error(
      `${error.response}.`
    ));
  } else {
    return Promise.reject(new Error("Axios error without response!"));
  }
});

export default axiosSecure;
