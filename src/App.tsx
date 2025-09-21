import { useState } from "react";

const counter = (a: number, b: number): string => {
  return (a / (a + b)).toFixed(2);
};

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(counter(Number(a), Number(b)));
  };

  return (
    <div>
      <h1>Counter</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
        <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
        <button className="button"></button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
