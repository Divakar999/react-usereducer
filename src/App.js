import React, { useReducer } from 'react';
import './style.css';
import { reducer } from './reducer';

export default function App() {
  var stateInitialValue = {
    count: 5,
  };
  const [state, dispatch] = useReducer(reducer, stateInitialValue);
  return (
    <div>
      <h3> Use Reducer Example </h3>
      Inital Value : {state.count} <br /> <br />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'RESET' })}> Reset </button>
      &nbsp;
    </div>
  );
}
