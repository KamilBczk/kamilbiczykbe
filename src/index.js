import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import './index.css';

import Home from './views/home/Home';
import About from './views/about/About';
import Portfolio from './views/portfolio/Portfolio';
import Projects from './views/projects/Projects';
import Blog from './views/blog/Blog';
import Contact from './views/contact/Contact';
import reportWebVitals from './reportWebVitals';
import TestContact from './views/contact/TestContact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HttpsRedirect>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home"/>} />

        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/project/:project" element={<Projects />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contacttest" element={<TestContact />} />
      </Routes>
    </BrowserRouter>
  </HttpsRedirect>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
