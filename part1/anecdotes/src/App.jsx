import { useState } from "react";
import { Anecdote } from "./components/Anecdote";

export function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const onNextAnecdote = () => {
    const randomNum = Math.round(Math.random() * (anecdotes.length - 1));
    setSelected(randomNum);
  };

  const makeVote = () => {
    setVotes((state) => ({
      ...state,
      [selected]: (state[selected] || 0) + 1,
    }));
  };

  const getMostVotedIndex = () => {
    if (Object.keys(votes).length === 0) return null;

    const mostVotedIndex = Object.entries(votes).reduce(
      (max, [key, value]) => (value > votes[max] ? key : max),
      Object.keys(votes)[0]
    );

    return mostVotedIndex;
  };

  return (
    <>
      <h3>Anecdote of the day</h3>
      <Anecdote votes={votes[selected]}>{anecdotes[selected]}</Anecdote>
      <button onClick={makeVote}>vote</button>
      <button onClick={onNextAnecdote}>next anecdote</button>

      {!!Object.values(votes).length && (
        <>
          <h3>Anecdote with most votes</h3>
          <Anecdote votes={votes[getMostVotedIndex()]}>
            {anecdotes[getMostVotedIndex()]}
          </Anecdote>
        </>
      )}

      <br />
    </>
  );
}
