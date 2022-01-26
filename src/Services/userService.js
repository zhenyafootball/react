import {axiosService} from "./axiosService";
import {urls} from "../Configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getUserPhotos: (albumId) => axiosService.get(`${urls.baseUrl}/albums/${albumId}/photos`).then(value => value.data),

}