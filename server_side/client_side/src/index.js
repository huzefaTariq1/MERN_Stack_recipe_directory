import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import { RecipieContextProvider } from './context/RecipieContext';
import { UsersRecipieContextProvider } from './context/UsersRecipieContext';
import {
  BrowserRouter,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <RecipieContextProvider>
        <UsersRecipieContextProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UsersRecipieContextProvider>
      </RecipieContextProvider>
    </AuthContextProvider>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
