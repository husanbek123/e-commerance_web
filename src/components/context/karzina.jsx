import { useState } from "react";
import { createContext } from "react";

export const KarzinaContext = createContext();

export default function KarzinaProvider({ children }) {
  const [karzina, setKarzina] = useState([]);
  return (
    <KarzinaContext.Provider value={{ karzina, setKarzina }}>
      {children}
    </KarzinaContext.Provider>
  );
}
