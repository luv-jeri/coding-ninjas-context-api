import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const user = {
      email,
      password,
      name: 'John Doe',
      id: 1,
    };
    console.log('done');

    if (email === user.email && password === user.password) {
      setUser(user);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
