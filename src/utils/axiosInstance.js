import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;   // VERY IMPORTANT
    },
    (error) => {
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
    (response) => {
        // Success → just return the response
        return response;
    },
    (error) => {
        // If backend sends 401 → token expired or invalid
        if (error.response?.status === 401) {
            localStorage.removeItem("token");

            // Redirect to login
            window.location.href = "/";
        }

        // Optional: handle 500 errors globally
        if (error.response?.status === 500) {
            console.error("Server Error:", error.response.data.message);
        }
        else if (error.code === 'ECONNABORTED') {
            console.error("Request timeout. Please try again.")
        }

        // Always reject so individual requests can handle errors too
        return Promise.reject(error);
    }
);

export default axiosInstance