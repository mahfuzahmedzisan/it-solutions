import React from 'react';
import Nav from './components/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Nav />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
