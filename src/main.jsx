import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ConfigProvider, theme } from 'antd';
// import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
            }}
        >
            <App />
        </ConfigProvider>
    </StrictMode>
);
