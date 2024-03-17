import React, { useState } from "react";

function PasswordComponent({ children }) {
 // State variable to store the password input value
  const [password, setPassword] = useState("");

  // State variable to keep track of whether the user has entered the correct password
  const [isValid, setIsValid] = useState(false);

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the password is correct
    if (password === "123") {
      setIsValid(true);
    } else {
      setPassword("");
      alert("Incorrect password. Please try again.");
    }
  };

  // Conditionally render the children if the password is correct
  if (isValid) {
    return children;
  } else {
    return (
      <div>
        <h1>Enter Password</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PasswordComponent;