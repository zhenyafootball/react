import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";


import {getAllUsersThunk} from "../../Slices/UsersSlice/UsersSlice";
import User from "../../Components/User/User";

const UsersPage = () => {

    const {users} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [dispatch])


    return (
        <>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export default UsersPage;