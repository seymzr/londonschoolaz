import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import logo from '../img/logo.png'
import {useTranslation} from 'react-i18next'

import azflag from '../img/az.png'
import enflag from '../img/en.png'

function Header() {
  const {t,i18n} = useTranslation()

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }
 

  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container className='col-md-12 ' >
        <Navbar.Brand href="#" className='d-lg-none '>
          <img id='logo' src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-lg-4 my-2 my-lg-0 d-flex justify-content-between w-100"
            navbarScroll
          >
            <div className='d-lg-flex my-lg-0 my-sm-5'>
            <Nav.Link className=' font-weight-bold text-uppercase' href="#about">{t('menu.1')}</Nav.Link>
            <Nav.Link className=' font-weight-bold text-uppercase' href="#courses">{t('menu.2')}</Nav.Link>
            <Nav.Link className=' font-weight-bold text-uppercase' href="#alm">{t('menu.3')}</Nav.Link>
            <Nav.Link className=' font-weight-bold text-uppercase' href="#contact">{t('menu.4')}</Nav.Link>
            
            </div>
          </Nav>
          
          <div className="d-lg-flex">
          <Nav.Link href='#signup' style={{width:100}} className="btn btn-primary mx-lg-2 mt-5 my-md-0">Join Now</Nav.Link>
          
          
          <div className="d-lg-flex align-items-center">
          <img onClick={()=>handleClick('az')} id='flag' src={azflag} alt='AzFlag' />
          <img onClick={()=>handleClick('en')} id='flag' src={enflag} alt='EnFlag' />
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;