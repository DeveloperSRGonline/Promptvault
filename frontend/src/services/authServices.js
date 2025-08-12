import axios from "../api/axiosconfig";


export const registerUser = (data) => axios.post("/register", data);
export const loginUser = (data) => axios.post("/login", data);
export const checkAuth = () => axios.get("/me");