import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();

  const storage = (key, value) => {
    localStorage.setItem(key, value);
  };

  const query = (key) => {
    alert(localStorage.getItem(key));
  };

  const eraser = (key) => {
    localStorage.removeItem(key);
    document.querySelector("input").value = "";
  };

  return (
    <div className="App">
      <label>Enter your name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => storage("ls_name", name)}>Save</button>
      <button onClick={() => query("ls_name")}>Query</button>
      <button onClick={() => eraser("ls_name")}>Remove</button>
    </div>
  );
}

export default App;
