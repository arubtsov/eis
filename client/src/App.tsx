import React from 'react';

import './App.css';
import ProductList from './products';
import SearchBar from './search-bar';
import AddProductBar from './add-product-bar';
import CreateProjectModal from './create-product-modal';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <AddProductBar />
        <ProductList />
        <CreateProjectModal />
    </div>
  );
}

export default App;
