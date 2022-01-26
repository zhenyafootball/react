import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../Services/userService";

const UserPhotosPage = () => {


    const {state: {id}} = useLocation();


    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        userService.getUserPhotos(id).then(value => setPhotos(value));

    }, [id])

    return (
        <div>
            {
                photos.map(photo => (
                    <div key={photo.id}>
                        <div>AlbumId: {photo.albumId}</div>
                        <div>ID: {photo.id}</div>
                        <div>Title: {photo.title}</div>
                        <img src={`${photo.thumbnailUrl}`} alt=""/>
                    </div>
                ))
            }
        </div>
    );
};

export {UserPhotosPage};
