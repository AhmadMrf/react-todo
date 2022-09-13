import React from "react";
import "./container.css";
const Container = (props) => {
  return <main className="app-wrapper">{props.children}</main>;
};

export default Container;
