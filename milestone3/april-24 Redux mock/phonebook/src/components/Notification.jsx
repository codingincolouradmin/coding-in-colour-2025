const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  const messageStyle = {
      color: notification.errorStatus ? "red" : "green",
      background: "lightgrey",
      fontSize: "20px",
      borderStyle: "solid",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
  }

  return (
    <div style={messageStyle}>
      {notification.message}
    </div>
  )
}

export default Notification;