import React from "react";

const authContext = React.createContext({
  isLoggedIn: false,
  userName: "",
  color: "",
  onlogedIn: () => {},
  onLogedOut: () => {}
});
export default authContext;
