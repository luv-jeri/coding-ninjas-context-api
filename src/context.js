import { createContext, useState, useContext } from 'react';
import CartModal from './components/CartModal';
const context = createContext();

const useCart = () => {
  const value = useContext(context);
  return value;
};

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items , setItems] = useState(0)
  const [showCart, setShowCart] = useState(false);

  const handleAdd = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      setTotal(total + cart[index].price);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setTotal(total + item.price);
    }
     setItems(items + 1);
  };
  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
      setTotal(total - cart[index].price);
      setItems(items - 1);
    }
  };
  const clear = () => {
    setCart([]);
    setTotal(0);
  };

  const toggle = () => {
    setShowCart(!showCart);
  };

  return (
    <context.Provider
      value={{
        handleAdd,
        handleRemove,
        clear,
        total,
        cart,
        toggle,
        items,
      }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </context.Provider>
  );
};

export { ContextProvider, useCart };
