import React from "react";
import { useState } from "react";

function Conditional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
    console.log(email);
  };

  const clearEmail = () => {
    setUserEmail("");
    document.querySelector("input").value = "";
  };

  return (
    <div>
      <h2>Register your email:</h2>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          id="input"
        />
        <button type="submit" onClick={sendEmail}>
          Send
        </button>
        {userEmail && (
          <div>
            <p>The user email is {userEmail}</p>
            <button onClick={clearEmail}>Clear Email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Conditional;
