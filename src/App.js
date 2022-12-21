import './App.css';
import ComponentA from './classComponents/ComponentA';
import ComponentB from './classComponents/ComponentB';
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
