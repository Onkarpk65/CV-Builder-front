export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", //Signup
        LOGIN: "/api/auth/login", // Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile" // Get logged in user details 
    },

    RESUME: {
        CREATE: "/api/cv", //POST - Create a new Cv
        GET_ALL: "/api/cv", // GET - GET all cv of loggedin user 
        GET_BY_ID: (id) => `/api/cv/${id}`, // GET - a specific cv
        UPDATE: (id) => `/api/cv/${id}`, // PUT - Update a cv
        DELETE: (id) => `/api/cv/${id}`, // DELETE a cv
        UPLOAD_IMAGES: (id) => `/api/cv/${id}/upload-images`,// PUT - upload thumbnail and cv profile

    },

    IMAGE: {
        UPLOAD_IMAGE: "api/auth/upload-image",
    }
}