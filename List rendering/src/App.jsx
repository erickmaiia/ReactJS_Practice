import "./App.css";
import OtherList from "./components/OtherList";

function App() {
  const myItems = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <h1>List Rendering</h1>
      <OtherList items={myItems} />
      <OtherList items={[]} />
    </div>
  );
}

export default App;
