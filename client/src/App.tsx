import React from 'react';

import './App.css';
import ProductList from './products';
import SearchBar from './search-bar';
import AddProductBar from './add-product-bar';
import EditProjectModal from './edit-product-modal';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <AddProductBar />
        <ProductList />
        <EditProjectModal />
    </div>
  );
}

export default App;
