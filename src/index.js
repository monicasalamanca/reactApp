// let's import our dependencies through ES6 modules
import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

// This is a way to import the styling
import "./css/style.css";

// Render method takes 2 things
// 1. Jsx 
// 2. the mounting point
//render(<p>HEEEYYY</p>, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));
