import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";

const Counter = ({ initialValue }) => {
  const [count, setCount] = React.useState(initialValue);
  const increaseValue = () => {
    setCount(count + 1);
  };
  const decreaseValue = () => {
    setCount(count - 1);
  };
  const resetValue = () => {
    setCount(initialValue);
  };

  return (
    <div className="app">
      <Button symbol="+" onClick={increaseValue} />
      <Count value={count} />
      <Button symbol="-" onClick={decreaseValue} />
      <Button symbol="Reset" onClick={resetValue} />
    </div>
  );
};

export default Counter;
