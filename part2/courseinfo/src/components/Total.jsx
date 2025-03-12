export function Total({ parts }) {
  const total = parts.reduce((a, el) => a + el.exercises, 0);

  return <p>{`total of ${total} exercises`}</p>;
}
