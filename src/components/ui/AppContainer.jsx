import React from "react";
import "./appContainer.css";
const AppContainer = (props) => {
  return <main className="app-wrapper">{props.children}</main>;
};

export default AppContainer;
