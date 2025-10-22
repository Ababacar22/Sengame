// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Notre CSS global

// 1. Importer les outils
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.js' // Notre fichier de thème

// 1. Importer ReactGA
import ReactGA from 'react-ga4';

// 2. Initialiser ReactGA avec VOTRE ID de mesure
// REMPLACEZ 'G-XXXXXXXXXX' PAR VOTRE PROPRE ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 
ReactGA.initialize(GA_MEASUREMENT_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Entourer l'App avec le Provider */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)