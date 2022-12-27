import { createContext, useState, useContext } from 'react';

const context = createContext();

const useCon = () => {
  const value = useContext(context);
  return value;
};

const ContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItems(items + 1);
  };
  const handleRemove = (price) => {
    setTotal(total - price);
    setItems(items - 1);
  };

  const reset = () => {
    setTotal(0);
    setItems(0);
  };

  return (
    <context.Provider
      value={{
        total,
        handleAdd,
        items,
        handleRemove,
        reset,
      }}
    >
      {children}
    </context.Provider>
  );
};

export { ContextProvider, useCon };
