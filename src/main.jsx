import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import DataTokenProvider from './context/data.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataTokenProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataTokenProvider>

  </StrictMode>,
)
