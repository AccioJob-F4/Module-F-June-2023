import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Notification.css";

const NotificationContainer = styled.div`
  background-color: ${(props) => {
    if (props.variant === "success") return "green";
    else if (props.variant === "error") return "red";
    else if (props.variant === "warning") return "orange";
  }};
`;

const Notification = ({ message, duration, onClose, variant }) => {
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
    <NotificationContainer variant={variant} className="notification-container">
      <div className="notification-content">
        <span>{message}</span>
      </div>
    </NotificationContainer>
  );
};

export default Notification;
