import {axiosService} from "./axiosService";


export const userService = {
    getAll: () => axiosService.get('https://jsonplaceholder.typicode.com/users').then(value => value.data),
}