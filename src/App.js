import React from "react";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
