import React from "react";

function App() {
  let placeName = [
    "Minar e Pakistan",
    "Mizar e Quaid",
    "Badshahi Masjid",
    "Masjid Wazeer Khan",
    "Wagha Border",
  ];
  return (
    <>
      <h1>Famous Places </h1>
      <ul className="list-group">
        {placeName.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
