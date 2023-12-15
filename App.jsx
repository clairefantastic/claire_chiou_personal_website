import React from 'react';
import Header from './component/header/Header';
import About from './component/about/About';
import Skills from './component/work/skills';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Project from './component/project/Project';
import './app.css';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
