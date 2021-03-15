import React from 'react';
import reactDOM from 'react-dom';
import AppGit from './apiGit/AppGit';
import App from './App';
import Index from './exemploSite/Index';
import AppProposta from './propostaCurso/AppProposta';

reactDOM.render(
  <React.StrictMode>
    <Index />
    {/* <AppGit /> */}
    {/* <AppProposta /> */}
    {/* <App />  Esse aplicativo poderá ser descomentado para ver sua funcionalidade */}
  </React.StrictMode>,
  document.getElementById('root'),
);
