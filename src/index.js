import React from 'react'
import { createRoot } from 'react-dom/client';
import { App } from './routes/App'  // añadimos el archivo principal de la APP .jsx

const container = document.getElementById('app'); // Añadimos la etiqueta con el id app del index.html que está en la carpeta public y es dónde va a hacer el renderizado la APP
const root = createRoot(container);

root.render(<App tab="home" />);