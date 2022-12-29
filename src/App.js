import './App.css';
import Button from './components/Button';
import { ContextOneProvider } from './contextOne';
import { ContextTwoProvider } from './contextTwo';
import ComponentA from './components/ComponentA';

function App() {
  return (
    <ContextOneProvider>
      <ContextTwoProvider>
      <div className='App'>
        <ComponentA />
        <Button />
      </div>
      </ContextTwoProvider>
    </ContextOneProvider>
  );
}

export default App;
