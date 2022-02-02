import axios from "axios";
import baseURL from "../Configs/urls";
export const axiosService = axios.create({
    baseURL
})