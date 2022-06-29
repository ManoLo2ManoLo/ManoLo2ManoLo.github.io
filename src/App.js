import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        setAboutSelected={setAboutSelected}
        setWorkSelected={setWorkSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : workSelected ? (
          <>
            <Work></Work>
          </>
        ) : contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : (
          <About></About>
        )}
      </main>

      <Footer></Footer>
    </div>
  )
}

export default App;