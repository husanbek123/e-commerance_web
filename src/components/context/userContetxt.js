import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  const [login, setLogin] = useState({ name: "", password: "" });
  
  return (
    <>
      <UserContext.Provider value={{ users, setUsers, login, setLogin }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;
