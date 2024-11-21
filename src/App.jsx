import React from 'react';
import Nav from './components/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <>
      <Nav />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
