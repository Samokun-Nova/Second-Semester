import React from 'react';
import { useCounter } from './useCounter';
import { Link } from 'react-router-dom';

export default function CounterPage() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const handleOnChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="counts">
      <h1 className='countValue' >{count}</h1>
      <div className='buttonBox'>
        <button className='increment' onClick={increment}>Increment</button>
        <button className='decrement' onClick={decrement}>Decrement</button>
        <button className='reset' onClick={reset}>Reset</button>
      </div>
      <input className='setValueInput' type="number" value={count} onChange={handleOnChange} />
      <Link to="/home" className="countGoBack">Go back to Home</Link>
    </div>
  );
}
