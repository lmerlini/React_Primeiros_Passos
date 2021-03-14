import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import AppProposta from './propostaCurso/AppProposta';

reactDOM.render(
  <React.StrictMode>
    <AppProposta />
    {/* 
    <App /> 
    Esse aplicativo poderá ser descomentado para ver sua funcionalidade
    */}
  </React.StrictMode>,
  document.getElementById('root'),
);
