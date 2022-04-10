import { createContext, useState } from "react";

export const PlainContentContext = createContext({
  plainContent: null,
  setPlainContent: null,
});

function PlainContentProvider({ children }) {
  const [plainContent, setPlainContent] = useState()

  return (
    <PlainContentContext.Provider
      value={{
        plainContent,
        setPlainContent
      }}
    >
      {children}
    </PlainContentContext.Provider>
  );
}

export default PlainContentProvider