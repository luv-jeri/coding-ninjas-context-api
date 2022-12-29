import {
  createContext,
  useState,
  useContext,
} from 'react';

const ContextOne = createContext();

const useContextOne = () => {
  const context = useContext(ContextOne);

  return context;
};

const ContextOneProvider = ({ children }) => {
  const [one, setOne] = useState(0);

  const handleUpdateOne = () => {}

  return (
    <ContextOne.Provider
      value={{
        one,
        handleUpdateOne,
        setOne
      }}
    >
      {children}
    </ContextOne.Provider>
  );
};

export { useContextOne, ContextOneProvider };
