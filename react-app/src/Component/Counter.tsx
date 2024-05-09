import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button className='bg-blue-500 border rounded-md' onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
