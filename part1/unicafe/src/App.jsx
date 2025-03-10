import { useState } from 'react';

export function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <h1>five feedback</h1>
      <button onClick={() => setGood((state) => state + 1)}>good</button>
      <button onClick={() => setNeutral((state) => state + 1)}>neutral</button>
      <button onClick={() => setBad((state) => state + 1)}>bad</button>

      <h2>statistics</h2>
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
      </p>
    </>
  );
}

export default App;
