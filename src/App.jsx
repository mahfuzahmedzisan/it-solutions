import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';


function App() {

  return (
    <>
      <header>
        <div className="container">
          <Nav></Nav>
        </div>
      </header>
      <Home></Home>
      <Home></Home>
      <Home></Home>
      <Home></Home>
    </>
  )
}

export default App
