import { useReducer, useState } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" }; /// 액션을 나열한다

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });

  const onDecrease = () => dispatch({ type: "DECREASE" });
  //   const [count, setCount] = useState<number>(0);
  //   const onIncrease = () => setCount((prev) => prev + 1);
  //   const onDecrease = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
