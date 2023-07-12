import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';


function Why() {
  const { t, i18n } = useTranslation();

  return(
    <Container>
      <div id='about'  className='my-lg-5'>
      <h2 className='text-center my-lg-5'>{t('whyTitle')}</h2>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.1.title')}</Card.Title>
              <Card.Text>{t('why.1.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.2.title')}</Card.Title>
              <Card.Text>{t('why.2.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.3.title')}</Card.Title>
              <Card.Text>{t('why.3.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.4.title')}</Card.Title>
              <Card.Text>{t('why.4.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.5.title')}</Card.Title>
              <Card.Text>{t('why.5.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.6.title')}</Card.Title>
              <Card.Text>{t('why.6.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='my-2'  >
          <Card style={{minHeight:150}}>
            <Card.Body>
              <Card.Title className='bluetext font-weight-bold'>{t('why.7.title')}</Card.Title>
              <Card.Text>{t('why.7.desc')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      
    </Row>
    </div>
    </Container>
  );
}


export default Why;