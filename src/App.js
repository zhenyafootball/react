import React, {useReducer, useState} from 'react';
import {useForm} from "react-hook-form";

import Cat from "./Components/Cat/Cat";
import Dog from "./Components/Dog/Dog";
import css from './App.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      if (action.target === 'cat') {
        return {...state, cats: [...state.cats, action.payload]}
      }
      return {...state, dogs: [...state.dogs, action.payload]}
    case 'delete':
      if (action.target === 'cat') {
        const newArr = state.cats.filter(cat => cat !== action.payload);
        return {...state, cats: newArr}
      }
      const newArr = state.dogs.filter(dog => dog !== action.payload);
      return {...state, dogs: newArr}
    default:
      return state
  }
};

const App = () => {

  const {
    handleSubmit, register
  } = useForm();

  const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  const addCat = (data) => {
    console.log(data)
    dispatch({type: 'add', target: 'cat', payload: data.cats});
  };

  const addDog = (data) => {
    dispatch({type: 'add', target: 'dog', payload: data.dogs})
  };

  const getCat = (value) => {
    dispatch({type: 'delete', target: 'cat', payload: value})
  };
  const getDog = (value) => {
    dispatch({type: 'delete', target: 'dog', payload: value})
  };

  return (<div className={css.formWrap}>
    <div>
      <form onSubmit={handleSubmit(addCat)}>
        <div><label>Add cat:<input type="text" defaultValue={''} {...register('cats')}/></label></div>
        <button>Save</button>
      </form>

      <div>{state.cats.map(cat => <Cat key={Math.random()} cat={cat} getCat={getCat}/>)}</div>
    </div>

    <div>
      <form onSubmit={handleSubmit(addDog)}>
        <div><label>Add dog:<input type="text" defaultValue={''} {...register('dogs')}/></label></div>
        <button>Save</button>
      </form>

      <div>{state.dogs.map(dog => <Dog key={Math.random()} dog={dog} getDog={getDog}/>)}</div>


    </div>

  </div>);
};

export default App;