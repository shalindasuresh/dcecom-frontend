import React from 'react';
import './App.css';
import Header from './components/templates/Header';

import ProductList from './components/ProductList';



function App() {
  return (
    <div className="App">
      <Header></Header>

    
      <ProductList></ProductList>
    </div>
  );
}

export default App;
