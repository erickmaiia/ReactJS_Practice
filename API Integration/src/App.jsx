import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./components/api";

function App() {
  const [input, setInput] = useState("");
  const [adress, setAdress] = useState("");

  const searchAdress = () => {
    api
      .get(`${input}/json/`)
      .then((response) => {
        if (response.data.erro) {
          alert("CEP NOT FOUND");
        } else {
          setAdress(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Query Adress</h1>
        <label>CEP</label>
        <div className="btn">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={searchAdress}>Search</button>
        </div>
        {adress && (
          <div>
            <p>Locality: {adress.localidade}</p>
            <p>UF: {adress.uf}</p>
            <p>DDD: {adress.ddd}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
