export function Filter({ value, handler }) {
  return (
    <>
      filter show with:
      <input
        type="text"
        value={value}
        onChange={(e) => handler(e.target.value)}
      />
    </>
  );
}
