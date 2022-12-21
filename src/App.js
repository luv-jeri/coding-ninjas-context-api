import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { createContext } from 'react';

const context = createContext();

function App() {
  return (
    <context.Provider value={'🔥'}>
      <div className='App'>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </context.Provider>
  );
}
export { context };
export default App;
