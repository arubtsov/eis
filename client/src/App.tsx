import React from 'react';
import './App.css';
import ProductList from './products';
import SearchBar from './search-bar';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <ProductList />
    </div>
  );
}

export default App;
