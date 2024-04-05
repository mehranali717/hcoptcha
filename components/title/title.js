import React from "react";

const Title = ({ title, className }) => {
  const explodeString = (str) => {
    if (str !== undefined) {
      return str.split(" ");
    } else {
      return [];
    }
  };

  const explodedArray = explodeString(title);

  return (
    <h2 className={className}>
      {explodedArray[0]}
      <span className="sky-fill"> {explodedArray[1]}</span>
    </h2>
  );
};

export default Title;
