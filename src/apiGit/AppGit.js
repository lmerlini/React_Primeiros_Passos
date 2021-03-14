import React from 'react';
import Dados from './Dados';

function AppGit() {
  const [usuario, setUsuario] = React.useState(null);

  React.useEffect(() => {
    git();
  }, []);

  async function git() {
    const result = await fetch('https://api.github.com/users/lmerlini')
      .then((response) => response)
      .then((response) => response.json())
      .then((json) => json);
    setUsuario(result);
  }
  return (
    <div>
      {(usuario && <Dados usuario={usuario} />) || (
        <h1>Erro ao buscar usuário</h1>
      )}
    </div>
  );
}

export default AppGit;
