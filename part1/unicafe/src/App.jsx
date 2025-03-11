import { useState } from 'react';

export function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / (all || 1);
  const positive = (100 / (all || 1)) * good;

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
        all {all} <br />
        average {average} <br />
        positive {positive}% <br />
      </p>
    </>
  );
}
