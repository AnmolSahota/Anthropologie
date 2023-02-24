import React, { createContext } from "react";
import { useState } from "react";
export const pagecontext = createContext();
function Pagecontextprovider({ children }) {
  let [change, setChange] = useState(false);
  return (
    <pagecontext.Provider value={{ change, setChange }}>
      {children}
    </pagecontext.Provider>
  );
}

export default Pagecontextprovider;
