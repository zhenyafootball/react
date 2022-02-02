import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk, getCarId} from "../../Slices/CarsSlice/CarsSlice";

const Car = ({car: {id, model, year, price}}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={() => dispatch(getCarId({id}))}>Update</button>
            <hr/>
        </>
    );
};

export default Car;