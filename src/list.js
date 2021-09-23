import React from "react";

export default function List(props, cutThrough) {
  console.log(cutThrough);
  return (
    <div className="list_style">
      {cutThrough ? (
        <li style={{ textDecoration: "line-through" }}> {props.text} </li>
      ) : (
        <li> {props.text} </li>
      )}
    </div>
  );
}
