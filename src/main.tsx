import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css";
import './index.css';
import App from './App.tsx';

const baseDate = new Date('2025-09-21T12:00:00')


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex justify-center">
      <App basetime={baseDate}/>
    </div>
  </StrictMode>,
)
