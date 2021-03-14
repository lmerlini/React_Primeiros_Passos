import React from 'react';

function Produto({ produto }) {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <img
        style={{ width: 400, height: 350, margin: 0, padding: 0 }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
        title={produto.fotos[0].titulo}
      />
    </div>
  );
}
export default Produto;
