import React, { useState } from "react";
import "./fullname.css";

function DisplayName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedFirst = first.trim();
    const trimmedLast = last.trim();

    if (!trimmedFirst || !trimmedLast) {
      setFull("");
      return;
    }

    setFull(`${trimmedFirst} ${trimmedLast}`);
  };

  return (
    <div className="box">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          id="first-name"
          name="firstName"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />

        <label htmlFor="last-name">Last Name:</label>
        <input
          id="last-name"
          name="lastName"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {full && <p data-testid="full-name">Full Name: {full}</p>}
    </div>
  );
}

export default DisplayName;
