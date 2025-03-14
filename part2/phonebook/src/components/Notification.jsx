export const Notification = ({ message }) => {
  const notificationStyles = {
    border: "solid 1px white",
    textAlign: "center",
    padding: "5px",
    margin: "10px 0",
    borderRadius: "5px",
  };
  const successStyles = {
    borderColor: "#4D6E5E",
    backgroundColor: "#D3EBDE",
    color: "#4D6E5E",
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={Object.assign(notificationStyles, successStyles)}>
      {message}
    </div>
  );
};
