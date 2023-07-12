import './style.css';
import logo from '../img/logo.png';
import {useTranslation} from 'react-i18next'



function Topbar() {
  const {t,i18n} = useTranslation()
  return (
    <div className="container-fluid d-none d-lg-block">
    <div className="row align-items-center py-4 px-xl-5">
      <div className="col-lg-3">
        <a href=''><img id='logo'  src={logo} alt="Logo" /></a>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          
          <i className="fa-sharp fa-solid fa-location-dot icons"></i>
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">{t('loc')}</h6>
            <a target='_blank' href='https://goo.gl/maps/QrctpmpLPPkiXikp9'><small>{t('location')}</small></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
        <i className="fa-solid fa-envelope icons"></i>
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Email:</h6>
            <a href='mailto:office@londonschool.az'><small>Office@londonschool.az</small></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
        
          <i className="fa-solid fa-phone icons"></i>
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">{t('phone')}</h6>
            <a href='tel:+994554448999'><small>055 444 89 99</small></a>
          </div>
       
        </div>
      </div>
    </div>
  </div>
  );
}

export default Topbar;