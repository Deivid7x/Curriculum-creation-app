import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import General from './components/general.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Experience />
  </React.StrictMode>,
)
