import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "./global.css";
import App from './App.tsx';
import Desc from './desc.tsx';

const baseDate = new Date('2025-09-21T12:00:00')


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex justify-center">
      <div className="">
        <App basetime={baseDate}/>
        
        <Desc></Desc>
      </div>
    </div>
  </StrictMode>,
)
