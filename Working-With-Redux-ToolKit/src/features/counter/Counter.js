import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, increment, decrement, addFromInput, fetchRandomNumber, reset } from './counterSlice'

export function Counter() {
  const [value, setValue] = useState()
  const counterValue = useSelector(selectCount)
  const dispatch = useDispatch()
  const addValueFromInput = (e) => {
    e.preventDefault();
    if (value === undefined) {

    }
    else {
      dispatch(addFromInput(value))
      setValue('')
    }
  }
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counterValue}
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <form onSubmit={(e) => addValueFromInput((e))}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" >Add Value</button>
      </form>
      <button onClick={() => dispatch(fetchRandomNumber())}>Fetch from Server</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
