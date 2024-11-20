import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';


function App() {

  return (
    <>
      <div>
        <div className="container">
          <Nav></Nav>
        </div>
      </div>
      <Home></Home>
    </>
  )
}

export default App
