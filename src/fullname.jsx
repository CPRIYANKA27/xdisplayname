import React, { useState } from "react";
import "./fullname.css";

function DisplayName() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log("First Name:", first);
    //console.log("Last Name:", last);
    setFull(`${first} ${last}`);
  };

  return (
    <div className="box">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {full && (
        <p>
          Full Name: <strong>{full}</strong>
        </p>
      )}
    </div>
  );
}

export default DisplayName;
