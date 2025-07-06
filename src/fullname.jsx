import React, { useState } from "react";
import "./fullname.css";

function DisplayName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) {
      setFull("");
      return;
    }
    setFull(`${first.trim()} ${last.trim()}`);
  };

  return (
    <div className="box">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          id="first-name"
          required
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          id="last-name"
          required
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {full && <p>Full Name: {full}</p>}
    </div>
  );
}

export default DisplayName;
