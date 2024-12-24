import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>Test website</p>
      </header>
      <div className='App-content'>
        <p>Behold:</p>
        <IncrementingButton/>
      </div>
      <div class='App-footer'>
        <p>🐕</p>
      </div>
    </div>
  );
}

function IncrementingButton() {
  const [value, setValue] = useState(0)
  return <button className='incrementing-button' onClick={() => setValue(value+1)}>{value}</button>
}

export default App;
