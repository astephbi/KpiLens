import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Router, Routes, BrowserRouter } from 'react-router-dom';
import '@fontsource/inter/400.css';
import theme from './theme';
import { ColorModeScript } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />

        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
