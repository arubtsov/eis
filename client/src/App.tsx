import React, { useEffect } from 'react';

import './App.css';
import ProductList from './products';
import SearchBar from './search-bar';
import AddProductBar from './add-product-bar';
import EditProjectModal from './edit-product-modal';

type DragEvents = 'dragleave' | 'dragenter' | 'dragover' | 'drop';
const DRAG_EVENTS: DragEvents[] = ['dragover', 'dragenter', 'drop', 'dragleave'];
const preventDragEvents = (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'none';
};

function App () {
    useEffect(() => {
        for (const event of DRAG_EVENTS)
            window.document.body.addEventListener(event, preventDragEvents);

        return () => {
            for (const event of DRAG_EVENTS)
                window.document.body.removeEventListener(event, preventDragEvents);
        };
    }, []);

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
