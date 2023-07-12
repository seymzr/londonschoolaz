import './style.css'
import {useTranslation} from 'react-i18next'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function SignUp(){
  const {t,i18n} = useTranslation()
  const form = useRef()
  
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      "service_hpx9u59",
      "template_ud3hr7u",
      form.current,
      "CBOnpJCYPFqxBq2zs",
    ).then(
      result=>{
        const sbmtButton = document.getElementById('submitButton')
        sbmtButton.innerText ='Göndərildi'
        sbmtButton.classList.add('disabled')
        
      },
      error=>console.log(error.text)
    )
    e.target.reset()
  }

    return(
    <div id='signup' className="container-fluid bg-registration rounded py-5" style={{margin:'90px 0'}}>
      <div className="container py-5 ">
        <div className="row align-items-center  ">
          <div className="col-lg-7 mb-5 mb-lg-0 ">
            <div className="mb-4">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{letterSpacing: 5}}
              >
                {t('signup.h5')}
              </h5>
              <h1 className="text-white">{t('signup.h1')}</h1>
            </div>
            <h6 className="text-white">{t('signup.p')}</h6>
            <ul className="list-inline text-white m-0">
              <li className="py-2">
                <i className="fa-solid fa-check"></i> {t('signup.key1')}
              </li>
              <li className="py-2">
                <i className="fa-solid fa-check"></i> {t('signup.key2')}</li>
              <li className="py-2">
                <i className="fa-solid fa-check"></i> {t('signup.key3')}</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 ">
              <div className="card-header bg-light text-center p-4">
                <h2 className="m-0">{t('signup.sign')}</h2>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                  <label className='text-white' htmlFor='user_name'>{t('form.name')}:</label>
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      name='user_name'
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label className='text-white' htmlFor='phone_number'>{t('form.number')}:</label>
                    <input
                      type="number"
                      name='phone_number'
                      className="form-control border-0 p-4"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                      <label className='text-white' htmlFor='birth_date'>{t('form.birth')}:</label>
                      <input id='birthDate' type='date' required="required" name='birth_date' className='form-control' />
                  </div>
                  <div>
                    <button
                    id='submitButton'
                      className="btn btn-dark btn-block border-0 py-3 text-capitalize"
                      type="submit"
                    >
                      {t('signup.signup')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SignUp;