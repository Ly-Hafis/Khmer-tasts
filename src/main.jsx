import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CartProvider } from './context/CartContext.jsx';

// ទាញយក Client ID ពីហ្វាល់ .env
const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientID}>
       <CartProvider>
         <App /> 
       </CartProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)