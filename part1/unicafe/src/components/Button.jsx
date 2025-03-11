export function Button({ children, handler }) {
  return (
    <button onClick={() => handler((state) => state + 1)}>{children}</button>
  );
}
