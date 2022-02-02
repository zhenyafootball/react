import React from 'react';

import css from './Todo.module.css'
import {useDispatch} from "react-redux";
import {changeStatus, deleteTodo} from "../../Store";

const Todo = ({todo:{id,name,status}}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.Todo}>
            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
            <div className={status?css.completed:''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todo;