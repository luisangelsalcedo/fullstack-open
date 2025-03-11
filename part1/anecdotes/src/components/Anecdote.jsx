export function Anecdote({ children, votes }) {
  return (
    <p>
      {children} <br />
      <small>has {votes ?? 0} votes</small>
    </p>
  );
}
