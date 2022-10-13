import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Erick");
  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="App">
      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <p>Number: {number}</p>
        <button onClick={changeNumber}>More one</button>
      </div>
    </div>
  );
}

export default App;
