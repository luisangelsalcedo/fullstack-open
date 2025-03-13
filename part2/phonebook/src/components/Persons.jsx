export function Persons({ data }) {
  return (
    <>
      <ol>
        {data.map(({ name, number }) => (
          <li key={name}>
            {name} 📞 {number}
          </li>
        ))}
      </ol>
    </>
  );
}
