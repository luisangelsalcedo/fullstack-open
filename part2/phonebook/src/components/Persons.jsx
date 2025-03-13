export function Persons({ data }) {
  return (
    <>
      {!data.length ? (
        "Cargando..."
      ) : (
        <ol>
          {data.map(({ name, number }) => (
            <li key={name}>
              {name} 📞 {number}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
