import {axiosService} from "./axiosService";
import {urls} from "../Configs/urls";

export const userService = {
    getALl: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
}