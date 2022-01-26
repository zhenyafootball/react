import React, {useEffect, useState} from 'react';
import {Link, useParams, Outlet} from "react-router-dom";

import {axiosService} from "../../Services/axiosService";
import {urls} from "../../Configs/urls";


const UserAlbumsPage = () => {
    const {userId} = useParams();

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axiosService.get(`${urls.users}/${userId}/albums`).then(value => setAlbums(value.data))
    }, [userId])

    return (
        <div>
            <h1>Albums</h1>
            {
                albums.map(album => (
                    <div key={album.id}>
                        <div>UserId: {album.userId}</div>
                        <div>ID: {album.id}</div>
                        <div>Title: {album.title}</div>
                        <Link to={`${album.id.toString()}/photos`} state={album}>
                            <button>Photos</button>
                        </Link>
                        <hr/>
                    </div>
                ))
            }
            <Outlet/>
        </div>
    );
};

export {UserAlbumsPage};