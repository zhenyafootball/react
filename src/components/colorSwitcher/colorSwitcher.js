import React, {useEffect, useState} from 'react';
import Switch from '@material-ui/core/Switch'
import {useDispatch, useSelector} from "react-redux";

import styles from './colorSwitcher.module.css'
import {changeSwitcherStatus} from "../../slices/moviseSlice/moviseSlice";

const ColorSwitcher = () => {

    const dispatch = useDispatch();
    const {switcherStatus} = useSelector(state => state['moviesReducer']);

    const state = localStorage.getItem('theme')

    return (
        <div className={styles.wrapper}>
            <Switch checked={state === 'true'} onChange={() => {
                dispatch(changeSwitcherStatus())
            }}/>
        </div>
    );
};

export default ColorSwitcher;