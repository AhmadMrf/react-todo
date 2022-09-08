import React from "react";

const authContext = React.createContext({
  isLoggedIn: false,
  userData: {},
  todosData: [],
  onlogedIn: () => {},
  onLogedOut: () => {},
  onEditUser: () => {},
});
export default authContext;
