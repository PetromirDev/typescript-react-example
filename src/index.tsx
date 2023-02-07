import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/Profile/Profile';
// import { getFoo, getGreeting, getMappedArray, getPersonDescription } from './examples/basicTypescript';
import './index.css';

// console.log(getFoo());
// console.log(getPersonDescription('John', 'New York', 30));
// console.log(getMappedArray([1, 2, 3, 4, 5]))
// console.log(getGreeting('John', 'male'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

