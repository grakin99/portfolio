/*
fizzy = (length = 101) => {
  const buzzArray = [];
  for (let i = 1; i < length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      buzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      buzzArray.push("Fizz");
    } else if (i % 5 === 0) {
      buzzArray.push("Buzz");
    } else {
      buzzArray.push(i.toString());
    }
  }
  return buzzArray;
};
*/
import React from "react";

const code = `
const fizzy = (length = 101) => {
    const buzzArray = [];
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        buzzArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        buzzArray.push("Fizz");
      } else if (i % 5 === 0) {
        buzzArray.push("Buzz");
      } else {
        buzzArray.push(i.toString());
      }
    }
    return buzzArray;
  };`;
export default function WorkSection(props) {
  return (
    <section className="work-showcase" {...props}>
      <pre>
        <h2>FizzBuzz</h2>
        <p>My fizzBuzz implementation. Returns an array with the output</p>
        <code>{code}</code>
      </pre>
      <pre>
        <a href="https://stock-api-nait.netlify.app/" target="#">
          My work with a restful api
        </a>
      </pre>
    </section>
  );
}
