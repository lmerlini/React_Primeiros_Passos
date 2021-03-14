import React from 'react';
import Produto from './Produto';
const App = () => {
  const [produto, setProduto] = React.useState(null);

  async function handleClick(e) {
    const value = e.target.innerText;
    const result = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/' + value,
    ).then((response) => response.json());
    if (!window.localStorage.getItem(result.id)) {
      window.localStorage.setItem(result.id, result.nome);
    }
    setProduto(result);
  }

  function handleStorage() {
    window.localStorage.clear();
  }
  return (
    <>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto produto={produto} />}
      <button
        onClick={handleStorage}
        style={{
          backgroundColor: 'red',
          marginRight: -10,
          float: 'right',
        }}
      >
        Limpar Storage
      </button>
    </>
  );
};

export default App;
