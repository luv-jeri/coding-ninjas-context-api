import './App.css';
import Items from './components/Items';
import Total from './components/Total';

function App() {
  return (
    <div className='App'>
      <h2>Shopping Cart</h2>
      <Total />
      <Items />
    </div>
  );
}

export default App;
