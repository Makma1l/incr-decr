import  { useState } from "react";
import B from "./B";
import C from "./C";

const A = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <B count={count} />
      <C increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
};

export default A;
