import './App.css';
import Items from './components/Items';
import Total from './components/Total';
import Login from './components/Login';

import { ItemContextProvider } from './context/ItemContext';
import { useUserContext } from './context/UserContext';
function App() {
  const { user } = useUserContext();
  return (
    <ItemContextProvider>
      <div className='App'>
        {user ? (
          <>
            {' '}
            <h2>Shopping Cart</h2>
            <Total />
            <Items />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ItemContextProvider>
  );
}

export default App;
