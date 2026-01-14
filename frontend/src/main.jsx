import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IntakeWrapper from './components/IntakeWrapper/IntakeWrapper'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntakeWrapper/>
  </StrictMode>,
)
