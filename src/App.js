import React, {useReducer} from 'react';

const reducer = (state, action) => {

  switch (action.type) {
    case 'inc1':
      return {...state, count1: state.count1 + 1};
    case 'dec1':
      return {...state, count1: state.count1 - 1};
    case 'res1':
      return {...state, count1: 0};
    case 'inc2':
      return {...state, count2: state.count2 + 1};
    case 'dec2':
      return {...state, count2: state.count2 - 1};
    case 'res2':
      return {...state, count2: 0};
    case 'inc3':
      return {...state, count3: state.count3 + 1};
    case 'dec3':
      return {...state, count3: state.count3 - 1};
    case 'res3':
      return {...state, count3: 0};
  }
  return state

};

const App = () => {

  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

  return (
      <>

        <div>
          <div>{state.count1}</div>
          <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
          <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
          <button onClick={() => dispatch({type: 'res1'})}>RES</button>
        </div>

        <div>
          <div>{state.count2}</div>
          <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
          <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
          <button onClick={() => dispatch({type: 'res2'})}>RES</button>
        </div>

        <div>
          <div>{state.count3}</div>
          <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
          <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
          <button onClick={() => dispatch({type: 'res3'})}>RES</button>
        </div>

      </>);


};

export default App;
