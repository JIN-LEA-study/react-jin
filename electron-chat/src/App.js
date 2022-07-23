import React from "react";

function App() {
  const title = "Hello world";
  const enhancedTitle = title + " - React App";

  const sendNotification = () => {
    electron.notificationApi.sendNotification(
      "My custom message!",
      "ipcRenderer.send('notify', 'Harmful code!!!!!')"
    );
  };

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  );
}

export default App;
