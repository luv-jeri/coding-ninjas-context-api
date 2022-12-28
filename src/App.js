import './App.css';
import Items from './components/Items';
import Total from './components/Total';
import TotalContext from './totalContext';
import ItemContext from './itemContext';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  return (
    <div className='App'>
      <h2>Shopping Cart</h2>
      <TotalContext.Provider
        value={{
          total,
          setTotal,
          item,
          setItem
        }}
      >
          <Total />
          <Items />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
