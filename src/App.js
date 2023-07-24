
import './App.css';
import ProductList from './components/ProductList';
import React from 'react';
import MetaMaskLogin from './components/MetaMaskLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MetaMaskLogin></MetaMaskLogin>
        <ProductList></ProductList>
      </header>
    </div>
  );
}

export default App;
