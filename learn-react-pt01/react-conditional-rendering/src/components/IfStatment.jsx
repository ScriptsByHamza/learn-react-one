import React from "react";

// IF-ELSE STATMENT

function IfStatment() {
  // let placeName = [];
  let placeName = [
    "Minar e Pakistan",
    "Mizar e Quaid",
    "Badshahi Masjid",
    "Masjid Wazeer Khan",
    "Wagha Border",
  ];

  if (placeName.length === 0) {
    return <h3>Uncomment other Place Name to view If Statment</h3>;
  }

  return (
    <>
      <h1>Famous Places (using If Statment) </h1>
      <ul className="list-group">
        {placeName.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default IfStatment;
