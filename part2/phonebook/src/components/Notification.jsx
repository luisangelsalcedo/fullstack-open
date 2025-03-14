export const Notification = ({ message, type }) => {
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

  const dangerStyles = {
    borderColor: "#810326",
    backgroundColor: "#F3D2D9",
    color: "#810326",
  };

  const styles = () => {
    if (type === "success")
      return Object.assign(notificationStyles, successStyles);
    if (type === "danger")
      return Object.assign(notificationStyles, dangerStyles);
  };

  if (message === null) {
    return null;
  }

  return <div style={styles()}>{message}</div>;
};
