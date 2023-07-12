import React, { useEffect, useState } from 'react';
import About from './components/About';
import ActiveLearning from './components/ActiveLearning';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Partners from './components/Partners';
import Topbar from './components/Topbar';
import Contact from './components/Contact';
import Why from './components/Why';
import Courses from './components/Courses';
import Container from 'react-bootstrap/Container'
import { Credits } from './components/Credits';
import { CSSTransition } from 'react-transition-group';
import PartnersHeader from './components/PartnersHeader';

function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine when to show or hide the back to top button
      const scrollPosition = window.scrollY;
      const scrollThreshold = 300; // Adjust this value as needed
      setShowWhatsapp(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    
    <>
    
      <Topbar />
      <Container fluid>
      <Header />
      <About />
      <Why />
      <Courses />
      <SignUp />
      <ActiveLearning />
      <PartnersHeader />
      <Partners  />
      <Contact />
      </Container>
      <Credits />
      <CSSTransition
        in={showWhatsapp}
        timeout={400}
        classNames="fade"
        unmountOnExit
      >
        <a id='whatsappButton' target='_blank' href="https://wa.me/+994554448999?text=Salam,%20dərslər%20barədə%20məlumat%20verə%20bilərsiniz?" > <i className="fa-brands fa-whatsapp"></i></a>
      </CSSTransition>
      
    </>
  );
}

export default App;
