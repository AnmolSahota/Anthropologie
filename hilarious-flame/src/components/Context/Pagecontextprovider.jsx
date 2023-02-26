import React, { createContext } from "react";
import { useState } from "react";
export const pagecontext = createContext();
function Pagecontextprovider({ children }) {
  let [userAuth, setUserAuth] = useState(false);
  return (
    <pagecontext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </pagecontext.Provider>
  );
}

export default Pagecontextprovider;
