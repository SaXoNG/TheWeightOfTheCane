import { useState } from "react";

const counter = (a: number, b: number): string => {
  const result = a / (a + b);

  return result.toFixed(2);
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
    <div className="container">
      <h1>Counter</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            className="input"
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </form>
      <button className="button" onClick={handleSubmit}>
        Рахувати
      </button>

      <div className="result">{result}</div>
    </div>
  );
}

export default App;
