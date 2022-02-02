import {axiosService} from "./axiosService";

export const postsService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/posts').then(value => value.data)
}