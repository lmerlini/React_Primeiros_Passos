import React from 'react';

function Dados({ usuario }) {
  return (
    <div>
      {console.log(usuario)}
      <h1>Login: {usuario.login}</h1>
      <ul>
        <li>Url: {<a href={usuario.url}>{usuario.url}</a>}</li>
      </ul>
      <img src={usuario.avatar_url} alt="" />
    </div>
  );
}

export default Dados;
