import {
  createContext,
  useState,
  useContext,
} from 'react';
import { useContextOne } from './contextOne';
const ContextTwo = createContext();

const useContextTwo = () => {
  const context = useContext(ContextTwo);
  return context;
};

const ContextTwoProvider = ({ children }) => {
  const [two, setTwo] = useState(0);
  const { one , setOne} = useContextOne();
  const handleUpdateTwo = () => {
    setOne(one + 1);
    setTwo(two + one );
  };

  return (
    <ContextTwo.Provider
      value={{
        two,
        handleUpdateTwo
      }}
    >
      {children}
    </ContextTwo.Provider>
  );
};

export { useContextTwo, ContextTwoProvider };
