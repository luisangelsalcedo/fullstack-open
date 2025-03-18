export function CountrySearchForm({ value, handler }) {
  return (
    <>
      find countries:{' '}
      <input
        type='text'
        value={value}
        onChange={(e) => handler(e.target.value)}
      />
    </>
  );
}
