import { useState } from 'react';
import { Statistics, Button } from './components';

export function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>five feedback</h1>
      <Button handler={setGood}>good</Button>
      <Button handler={setNeutral}>neutral</Button>
      <Button handler={setBad}>bad</Button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}
