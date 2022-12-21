import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { context } from './context';

function App() {
  return (
    <context.Provider
      value={{
        name: 'John Doe',
        age: 30,
      }}
    >
      <div className='App'>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </context.Provider>
  );
}

export default App;
