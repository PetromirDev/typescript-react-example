import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/Profile/Profile';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

