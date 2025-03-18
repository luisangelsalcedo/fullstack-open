export function CountriesList({ countries, handler }) {
  return countries.map(({ name, flags }) => (
    <div key={name.common}>
      <img src={flags.svg} alt={flags.alt} width='18px' /> {name.common}{' '}
      <button onClick={() => handler(name.common)}>Show</button>
    </div>
  ));
}
