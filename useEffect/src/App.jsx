import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cont, setCont] = useState(0);
  const [contB, setContB] = useState(10);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("Runs on every render");
  });

  useEffect(() => {
    console.log("Only runs when incrementing value");
  }, [cont]);

  useEffect(() => {
    console.log("Only runs one time");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`The incrementing is changed ${cont} times`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [cont]);

  useEffect(() => {
    fetch("https://api.github.com/users/erickmaiia")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCont((prevCont) => prevCont + 1)}>
          Render
        </button>
        <p>{cont}</p>
      </div>
      <div>
        <button onClick={() => setContB((prevCont) => prevCont + 1)}>
          Render B
        </button>
        <p>{contB}</p>
      </div>
      {user && (
        <div>
          <p>User Data</p>
          <h1>User: {user.name}</h1>
          <img src={user.avatar_url} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
