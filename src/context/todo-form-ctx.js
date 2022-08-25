import react from "react";
const todoFormCtx = react.createContext({
  isOpen: false,
  initialInfo: {},
});
export default todoFormCtx;
