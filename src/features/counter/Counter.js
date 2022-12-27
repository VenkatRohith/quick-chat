import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.scss";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="row valueCounter">
        <button
          className="btn decrement-btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value">{count}</span>
        <button
          className="btn increment-btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="col">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="btn asyncButton"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="btn"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
