import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Notification.css";

const NotificationContainer = styled.div`
  background-color: ${(props) => {
    if (props.success) return "green";
    else if (props.error) return "red";
    else if (props.warning) return "orange";
  }};
`;

const Notification = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <NotificationContainer warning className="notification-container">
      <div className="notification-content">
        <span>{message}</span>
      </div>
    </NotificationContainer>
  );
};

export default Notification;
