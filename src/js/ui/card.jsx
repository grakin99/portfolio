import React from "react";
export default () => {
  return (
    <div className="card">
      <h3 className="title">Card 1</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      <div className="circle">
        <svg version="1.1">
          <circle className="stroke" cx="60" cy="60" r="50" />
        </svg>
      </div>
    </div>
  );
};
