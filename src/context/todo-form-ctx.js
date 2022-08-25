import react from "react";
const todoFormCtx = react.createContext({
  initialInfo: {},
  setIsOpen: () => {},
  setInitialInfo: () => {}
});
export default todoFormCtx;
