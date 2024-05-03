import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthContextProvider from './contexts/AuthContextProvider.tsx';
import LoadingContextProvider from './contexts/LoadingContextProvider.tsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LoadingContextProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </LoadingContextProvider>,
);
