import {axiosService} from "./axiosService";
import axios from "axios";

export const movieService = {
    getByPage: (page) => axiosService.get(`/discover/movie/?page=${page}`).then(value => value.data),
    getGenres: () => axiosService.get('/genre/movie/list').then(value => value.data).then(value => value.genres),
    getMovieDetails: (id) => axiosService.get(`/movie/${id}`).then(value => value.data),
    getVideos:(id)=>axiosService.get(`/movie/${id}/videos`).then(value => value.data)



};