import {Row,Col,Card} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'


function ActiveLearning(){
  const {t,i18n} = useTranslation()
  let items = [
    {
        icon:'fa-brands fa-discourse',
        title:t('alm.1.title'),
        description:t('alm.1.desc')
    },
    {
        icon:'fa-solid fa-money-bill-1-wave',
        title:t('alm.2.title'),
        description:t('alm.2.desc')
    },
    {
        icon:'fa-solid fa-language',
        title:t('alm.3.title'),
        description:t('alm.3.desc')
    },
    {
        icon:'fa-solid fa-person-chalkboard',
        title:t('alm.4.title'),
        description:t('alm.4.desc')
    },
    {
        icon:'fa-solid fa-user-group',
        title:t('alm.5.title'),
        description:t('alm.5.desc')
    }
]

    return(
        <div id='alm'>
           <h2 className="text-center bluetext">{t('alm.title')}</h2>
             <Row xs={1} md={2} className="g-4 justify-content-center">
                {items.map((item, idx) => (
                <Col key={idx} >
                    <Card style={{minHeight:200}}  className='m-3 bg-secondary  '>
                        <Card.Body>
                        <Card.Title><i id='almicon' className={item.icon}></i> {item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default ActiveLearning;