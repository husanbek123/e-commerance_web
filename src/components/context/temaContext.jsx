import { useState } from "react";
import { createContext } from "react";

export const TemaContext = createContext();

export default function ContextProvider({ children }) {
  const [tema, setTema] = useState("light");
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}
