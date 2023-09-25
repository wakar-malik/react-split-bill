import React from "react";

function Input(props) {
  return (
    <input
      type={props.type || "text"}
      value={props.value || ""}
      className={props.className || ""}
      id={props.id || ""}
      placeholder={props.placeholder || ""}
      onChange={props.onChange || (() => {})}
      disabled={props.disabled || false}
    />
  );
}

export default Input;
