export function Total({ parts }) {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <p>
      <small>{`total of ${total} exercises`}</small>
    </p>
  );
}
