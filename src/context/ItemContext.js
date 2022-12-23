import { createContext, useState, useContext } from 'react';
const ItemContext = createContext();

const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItemContext must be used within a ItemContextProvider');
  }
  return context;
};

const ItemContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  const add = (price) => {
    setTotal(total + price);
  };

  const remove = (price) => {
    setTotal(total - price);
  }

  return (
    <ItemContext.Provider
      value={{
        add,
        remove,
        total,
        setTotal,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContextProvider, useItemContext };
