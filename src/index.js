import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import './index.min.css';

import Home from './views/home/Home';
import About from './views/about/About';
import Portfolio from './views/portfolio/Portfolio';
import Projects from './views/projects/Projects';
import Blog from './views/blog/Blog';
import Contact from './views/contact/Contact';
import Resume from './views/resume/Resume';

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
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </HttpsRedirect>
);
