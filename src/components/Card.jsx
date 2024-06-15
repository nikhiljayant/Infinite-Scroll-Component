import React from "react";
// components
import EachCard from "./EachCard.jsx";

const Card = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {data.map((curVal, id) => {
            return <EachCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
