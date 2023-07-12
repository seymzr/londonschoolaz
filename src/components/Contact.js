import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {useTranslation} from 'react-i18next'


export default function Contact() {
  const {t,i18n} = useTranslation()

  return (
    <div className="d-flex justify-content-center ">
      <div id="contact" className='col-md-9 p-5 d-lg-flex justify-content-between'>
        
        <Row xs={1} md={2} className="g-4 justify-content-center">
          <Col className='my-3 text-center'>
            <h6 className='text-capitalize font-weight-bold mb-3'>{t('contact.location')}</h6>
            <a target='_blank' href='https://goo.gl/maps/QrctpmpLPPkiXikp9'>{t('location')}</a>
          </Col>
          <Col className='my-3 text-center'>
            <h6 className='text-capitalize font-weight-bold mb-3'>{t('contact.social')}</h6>
            <div id="contactIcons">
              <a id='instagram' target='_blank' href='https://instagram.com/london.school.azerbaijan'><i className="fa-brands fa-instagram"></i></a>
              <a id='facebook' target='_blank' href='https://www.facebook.com/LondonSchoolOfAzerbaijan'><i className="fa-brands fa-facebook"></i></a>
              <a id='whatsapp' target='_blank' href=" https://wa.me/+994554448999?text=Salam,%20dərslər%20barədə%20məlumat%20verə%20bilərsiniz?"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </Col>
         
          <Col className='my-3 text-center'>
              <h6 className='text-capitalize font-weight-bold mb-3'>Email</h6>
              <a href='mailto:office@londonschool.az '>office@londonschool.az</a>
          </Col>
        <Col className='my-3 text-center'>
            <h6 className='text-capitalize font-weight-bold mb-3'>{t('contact.phone')}</h6>
            <a href='tel:+994554448999'>055 444 89 99</a>
        </Col>
        </Row>
      </div>
    </div> 
    )
}