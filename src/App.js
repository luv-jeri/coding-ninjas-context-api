import './App.css';
import { ContextProvider } from './context';
import Items from './components/Items';
import Total from './components/Total';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <h2>Shopping Cart</h2>
        <Total />
        <Items />
      </div>
    </ContextProvider>
  );
}

export default App;
