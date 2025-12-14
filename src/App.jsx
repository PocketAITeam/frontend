import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

import SimpleBar from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';

function App() {
    return (
        <SimpleBar style={{ height: '100vh', color: '#00a8e8' }}>
            <Home />
        </SimpleBar>
    );
}

export default App;
