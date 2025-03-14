export function Persons({ data, handlerDelete }) {
  return (
    <>
      {!data.length ? (
        "Cargando..."
      ) : (
        <ol>
          {data.map(({ name, number, id }) => (
            <li key={name}>
              {name} 📞 {number}
              {!!id && (
                <button onClick={() => handlerDelete(id)}>delete</button>
              )}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
