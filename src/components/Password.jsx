import React, { useState } from "react";
import "../style/Password.css";

function PasswordComponent({ children }) {
  // State variable to store the password input value
  const [password, setPassword] = useState("");

  // State variable to keep track of whether the user has entered the correct password
  const [isValid, setIsValid] = useState(false);

  // State variable to store the error message
  const [error, setError] = useState("");

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the password is correct
    if (password === "123") {
      setIsValid(true);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };
  const tmgExplanation = "Please note that a password is required to make this site considered non-public, in order to comply with §5 TMG."

  // Conditionally render the children if the password is correct
  if (isValid) {
    return children;
  } else {
    return (
      <div className="password-container">
        <h1 className="password-title">Enter Password</h1>
        <form onSubmit={handleFormSubmit} className="password-form">
          <input type="password" value={password} onChange={handlePasswordChange} className="password-input" />
          <button type="submit" className="password-button">Submit</button>
          {error && <p className="password-error">{error}</p>}
          <p>{tmgExplanation}</p>
        </form>
      </div>
    );
  }
}

export default PasswordComponent;