export function PersonForm({ name, handlerName, phone, handlerPhone, action }) {
  return (
    <>
      <form onSubmit={action}>
        <div>
          name:
          <input
            value={name}
            onChange={(e) => handlerName(e.target.value)}
            placeholder="Linus Torvalds"
          />
        </div>
        <div>
          number:
          <input
            value={phone}
            onChange={(e) => handlerPhone(e.target.value)}
            placeholder="123-123-123456"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
