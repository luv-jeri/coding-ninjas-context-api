import './App.css';
import { context } from './context';
import { useState } from 'react';
import Items from './components/Items';
import Total from './components/Total';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <context.Provider
      value={{
        total,
        setTotal,
      }}
    >
      <div className='App'>
        <h2>Shopping Cart</h2>
        <Total />
        <Items />
      </div>
    </context.Provider>
  );
}

export default App;
