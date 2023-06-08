import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 2);
    // setCount(count + 1);
    setCount((currentCounr) => count +1);
    setCount((currentCounr) => count +1);


  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
