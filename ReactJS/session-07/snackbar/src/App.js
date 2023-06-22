import React, { useState } from "react";
import Notification from "./Notification";

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <button onClick={handleShowNotification}>Show Notification</button>
      {showNotification && (
        <Notification
          message="This is a notification message"
          duration={3000}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default App;
