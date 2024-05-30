import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const handleLengthChange = (event) => {
    setLength(parseInt(event.target.value, 10)); // added radix parameter
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="control-panel">
        <label>Password Length: </label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={handleLengthChange}
        />
        <span>{length}</span>
      </div>
      <button className="generate-button" onClick={generatePassword}>Generate Password</button>
      <div className="password-container">
        <h2>Generated Password:</h2>
        <input className="password-input" type="text" readOnly value={password} />
        <button className="copy-button" onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  );
}

export default App;
