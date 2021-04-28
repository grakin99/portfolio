import React from "react";
export default (props) => {
  return (
    <div className="card" {...props}>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>

      <div className="card-content">
        <p className="card-title">{props.title}</p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
