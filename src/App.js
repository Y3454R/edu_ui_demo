import React, { useState } from "react";
import Card from "./Card"; // Import the Card component
import "./App.css"; // Import CSS file for styling

function App() {
  // State variables to store form input values
  const [examination, setExamination] = useState("");
  const [year, setYear] = useState("");
  const [board, setBoard] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log("Form submitted with data:", {
      examination,
      year,
      board,
      registrationNumber,
      rollNumber,
    });
    // Clear form fields after submission
    setExamination("");
    setYear("");
    setBoard("");
    setRegistrationNumber("");
    setRollNumber("");
  };

  return (
    <div className="App">
      <h1>Mayer Doa Result Vandar</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Examination:</label>
            <input
              type="text"
              value={examination}
              onChange={(e) => setExamination(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Board:</label>
            <input
              type="text"
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Registration Number:</label>
            <input
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Roll Number:</label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </Card>
    </div>
  );
}

export default App;
