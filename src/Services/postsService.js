import {axiosService} from "./axiosService";
import {urls} from "../Configs/urls";

export const postService = {
    getALl: () => axiosService.get(urls.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
}