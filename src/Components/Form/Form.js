import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../Slices/CarsSlice/CarsSlice";
import {carValidator} from "../../Validator/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";


const Form = () => {


    const dispatch = useDispatch();
    const {
        register, handleSubmit, formState: {errors}, reset
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});


    const {carId: id} = useSelector(state => state['carReducer']);

    const submit = (data) => {
        if (id) {
            dispatch(updateCar({id, data}))
        }
        dispatch(createCar({data}));
        reset()
    };


    return (<div>
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <hr/>
            <button>{id ? 'Update' : 'Create'}</button>
            <hr/>
        </form>
    </div>);
};

export default Form;