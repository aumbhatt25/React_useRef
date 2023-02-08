import { useRef, useState } from 'react';

import './App.css';

function App() {
  // const [value, setValue] = useState("");
  const value = "";

  const valueRef = useRef();
  console.log("render");
  const handleClick = () => {
    console.log(valueRef);
    // setValue(valueRef.current.value);

    value = valueRef.current.value;
  };
  return (
    <div className="App">
      {/* {valueRef.current ? (valueRef.current.value) : ""} */}
      <h4>Value: {value}</h4>
      <input ref={valueRef} />
      <button onClick={handleClick}>click</button>

      {/* <input onChange={handleClick} ref={valueRef} /> */}
    </div>);
}

export default App;