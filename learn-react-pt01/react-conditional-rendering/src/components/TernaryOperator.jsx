import React from "react";

// IF-ELSE STATMENT

function TernaryOperator() {
  // let FoodName = [];
  let FoodName = [
    "Biryani",
    "Aloo",
    "Kharahi",
    "Aloo Gosht",
  ];
  let emptyMess = FoodName.length === 0 ? <h3>Uncomment other Food Name to view Ternary operator</h3> : null

  return (
    <>
      <h1>Famous Food (using Ternary operator) </h1>
      {emptyMess}
      <ul className="list-group">
        {FoodName.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TernaryOperator;
