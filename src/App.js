import './App.css';
import data from "./data.json";
import Tree from "./Tree";

function App() {
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
}

export default App;
