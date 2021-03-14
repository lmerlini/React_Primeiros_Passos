import React from 'react';
import Produto from './Produto';
const App = () => {
  const [produto, setProduto] = React.useState(null);
  async function requestAPI(produto) {
    const result = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/' + produto,
    ).then((response) => response.json());
    return result;
  }
  async function handleClick(e) {
    const result = await requestAPI(e.target.innerText);
    window.localStorage.clear();
    window.localStorage.setItem(result.id, result.nome);

    setProduto(result);
  }

  React.useEffect(() => {
    async function callEffect() {
      setProduto(await requestAPI(window.localStorage.key(0)));
    }
    callEffect();
  }, [produto]);
  return (
    <>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto produto={produto} />}
    </>
  );
};

export default App;
