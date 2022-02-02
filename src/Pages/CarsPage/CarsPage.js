import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../../Components/Car/Car";
import {getAllCars} from "../../Slices/CarsSlice/CarsSlice";
import Form from "../../Components/Form/Form";


const CarsPage = () => {

    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <>

            <Form/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={Math.random()} car={car}/>)}

        </>
    );
};

export default CarsPage;