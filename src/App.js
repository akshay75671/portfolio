import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact /> 
              </>
            }
          />
          {/* You can add specific routes for detailed project pages if desired */}
          {/* <Route path="/projects/:id" element={<ProjectDetailPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;