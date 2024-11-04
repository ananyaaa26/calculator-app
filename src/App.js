import React from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Calculator</h1>
      </header>
      <main className="app-main">
        <Calculator />
      </main>
      <footer className="app-footer">
        
      </footer>
    </div>
  );
}

export default App;