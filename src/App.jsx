import React from 'react';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>

      <main>
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
