import React from 'react'
import './App.css';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div className='app'>
      <h1>React Typescript</h1>
      <Card width='200px' height='200px' variant={CardVariant.outlined}>
        <button>button</button>
      </Card>
    </div>
  );
}

export default App;
