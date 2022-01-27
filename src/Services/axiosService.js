import axios from "axios";
import baseUrl from "../Configs/urls";

export const axiosService = axios.create({
    baseURL:baseUrl
})