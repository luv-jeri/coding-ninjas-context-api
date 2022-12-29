import {
  createContext,
  useState,
  useContext,
} from 'react';

const CountContext = createContext();

const useCount = () => {
  const context = useContext(CountContext);

  return context;
};

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name ,  setName] = useState('John Doe')

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <CountContext.Provider
      value={{
        count,
        name,
        handleNameChange,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { useCount, CountProvider };
