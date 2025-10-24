import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Feature from './components/home/Feature';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <div style={{ height: '200vh' }}>
            <Home />
        </div>
    );
}

export default App;
