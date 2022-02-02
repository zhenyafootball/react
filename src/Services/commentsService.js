import {axiosService} from "./axiosService";

export const commentsService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/comments').then(value => value.data)
}