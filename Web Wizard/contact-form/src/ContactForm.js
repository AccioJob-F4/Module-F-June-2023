import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = ({ setSnackBarState, snackBarState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          name,
          email,
          message,
        }
      );

      setSnackBarState({
        ...snackBarState,
        showNotification: true,
        type: "success",
        message: "Form submitted successfully!",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setSnackBarState({
        ...snackBarState,
        showNotification: true,
        type: "error",
        message: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">SEND</button>
    </form>
  );
};

export default ContactForm;
