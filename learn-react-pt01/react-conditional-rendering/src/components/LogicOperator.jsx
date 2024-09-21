import React from "react";

// IF-ELSE STATMENT

function LogicOperator() {
  // let Name = [];
  let Name = [
    "Hamza",
    "Ayesha",
    "Zain",
    "Muqadas",
  ];

  return (
    <>
      <h1>Names (using logic operator) </h1>
      {Name.length === 0 && <h3>Uncomment other Name to view Logic operator</h3>}
      <ul className="list-group">
        {Name.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default LogicOperator;
