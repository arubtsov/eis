import React from 'react';

import './App.css';
import ProductList from './products';
import SearchBar from './search-bar';
import AddProductBar from './add-product-bar';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <AddProductBar />
        <ProductList />
    </div>
  );
}

export default App;
