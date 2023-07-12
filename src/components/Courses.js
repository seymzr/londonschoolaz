import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useTranslation} from 'react-i18next'


function Courses() {
  const {t,i18n} = useTranslation()
  return (
   <div id='courses'>
   <h2 className='text-center my-4'>{t('menu.2')}</h2>
   <Tabs
      defaultActiveKey="first"
      id="courses"
      className="mb-3 "
    >
      <Tab eventKey="first" title={t('courses.1.0')}>
        {t('courses.1.1')}<br />
        {t('courses.1.2')}<br />
        {t('courses.1.3')}<br />
        {t('courses.1.4')}<br />
        {t('courses.1.5')}<br />
        {t('courses.1.6')}<br />
        {t('courses.1.7')}<br />
        {t('courses.1.8')}<br />
        {t('courses.1.9')}<br />
        </Tab>
      <Tab eventKey="second" title={t('courses.2.0')}>
        {t('courses.2.1')}<br />
        {t('courses.2.2')}<br />
        {t('courses.2.3')}<br />
        {t('courses.2.4')}<br />
        {t('courses.2.5')}<br />
        {t('courses.2.6')}<br />
        {t('courses.2.7')}<br />
      </Tab>
      <Tab eventKey="third" title={t('courses.3.0')} >
        {t('courses.3.1')}<br />
        {t('courses.3.2')}<br />
        {t('courses.3.3')}<br />
        {t('courses.3.4')}<br />
        {t('courses.3.5')}<br />
        {t('courses.3.6')}<br />
        {t('courses.3.7')}<br />
        <b>{t('courses.3.8')}</b><br />
        {t('courses.3.9')}<br />
        {t('courses.3.10')}<br />
        {t('courses.3.11')}<br />
        {t('courses.3.12')}<br />
        {t('courses.3.13')}<br />
      </Tab>
      <Tab eventKey="fourth" title={t('courses.4.0')}>
      {t('courses.4.1')}<br /> 
      <b>{t('courses.4.2')}</b><br />
      {t('courses.4.3')}<br />
      {t('courses.4.4')}<br />
      {t('courses.4.5')}<br />
      {t('courses.4.6')}<br />
      {t('courses.4.7')}<br />
      {t('courses.4.8')}<br />
      </Tab>
    </Tabs>   
   </div>
  );
}

export default Courses;