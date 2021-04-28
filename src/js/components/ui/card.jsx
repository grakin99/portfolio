import React from "react";
export default (props) => {
  return (
    <div className="card" {...props}>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>

      <div className="card-content">
        <h3 className="title">{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};