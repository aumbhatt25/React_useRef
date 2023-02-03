import { useRef, useState } from 'react';

import './App.css';

function App() {
  const [value, setValue] = useState("");
  const valueRef = useRef();
  console.log("render");
  const handleClick = () => {
    console.log(valueRef);
    setValue(valueRef.current.value);
  };
  return (
    <div className="App">
      <h4>Value: {value}</h4>
      <input ref={valueRef} />
      <button onClick={handleClick}>click</button>
    </div>);
}

export default App;