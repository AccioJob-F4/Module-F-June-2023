import React, { useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm";
import Notification from "./ui/Snackbar/Notification";

const App = () => {
  const [snackBarState, setSnackBarState] = useState({
    message: "",
    showNotification: false,
    type: "success",
  });

  return (
    <div className="app">
      {snackBarState.showNotification && (
        <Notification
          variant={snackBarState.type}
          message={snackBarState.message}
          duration={3000}
          onClose={() => {
            setSnackBarState({ ...snackBarState, showNotification: false });
          }}
        />
      )}
      <ContactForm
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </div>
  );
};

export default App;
