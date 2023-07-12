 import './style.css';
import {useTranslation} from 'react-i18next'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Card,Container} from 'react-bootstrap';

import about1 from '../img/about1.jpg'
import about2 from '../img/about2.jpg'
import about3 from '../img/about3.jpg'
import about4 from '../img/about4.jpg'
import about5 from '../img/about5.jpg'
import about6 from '../img/Loqo.png'

function About() {
  const {t,i18n} = useTranslation()
  

  return (
    <Container  >
        <Card border='light' className='justify-content-center align-items-center my-5 flex-lg-row' >
            <div>
            <Carousel autoPlay={true} showArrows={false} transitionTime={2.5} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={about1} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
                <div>
                    <img src={about2} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
                <div>
                    <img src={about3} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
                <div>
                    <img src={about4} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
                <div>
                    <img src={about5} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
                <div>
                    <img src={about6} alt='AboutUs' className='rounded' style={{maxWidth:450}} />
                </div>
            </Carousel>
            </div>
            <Card.Body>
                <h4 className='font-weight-bold bluetext text-uppercase'>{t('about.title1')}</h4>
                <h1 className=' fs-1 text-capitalize'>{t('about.title2')}</h1>
                <Card.Text>{t('about.desc')}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default About; 
