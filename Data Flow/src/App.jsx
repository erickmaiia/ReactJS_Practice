import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [name, setName] = useState("Joao");

  const changeName = () => {
    setName("Joaquim");
  }; // Change child name

  return (
    <div className="App">
      <h3>Parent</h3>
      <button onClick={changeName}>Change</button>
      <hr />
      <Child name={name} />
    </div>
  );
}

export default App;
