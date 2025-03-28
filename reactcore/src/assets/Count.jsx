import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce =() =>{
    const newCount = count-1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
