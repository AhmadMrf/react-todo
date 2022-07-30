import React from "react";

const authContext = React.createContext({
  isLoggedIn: false,
  userData: {},
  onlogedIn: () => {},
  onLogedOut: () => {},
  onEditUser: () => {}
});
export default authContext;
