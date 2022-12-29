import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import Button from './components/Button';
import Input from './components/Input';
import { CountProvider } from './countContext';

function App() {
  return (
    <CountProvider>
      <div className='App'>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <Button />
        <Input />

      </div>
    </CountProvider>
  );
}

export default App;
