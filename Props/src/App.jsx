import "./App.css";
import SayMyName from "./components/SayMyName";
import Person from "./components/Person";

function App() {
  const namee = "Maria";

  return (
    <div className="App">
      <h1>Props</h1>
      <SayMyName name="Erick" />
      <SayMyName name="João Carlos" />
      <SayMyName name={namee} />
      <Person
        photo="https://via.placeholder.com/150"
        namee="Erick"
        age="19"
        profission="Developer"
      />
    </div>
  );
}

export default App;
