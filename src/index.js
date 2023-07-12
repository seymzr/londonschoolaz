import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import i18n (needs to be bundled ;)) 
import './i18n';
import Spinner from 'react-bootstrap/Spinner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(
      <Spinner  animation="border" role="status">
      </Spinner>
  )}>
    <App />
  </Suspense>
);


