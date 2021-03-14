import React from 'react';

function Produto({ produto }) {
  return (
    <div>
      <h1>{produto.nome}</h1>
      {/* <img
        src={props.fotos[0].src}
        alt={props.fotos[0].titulo}
        title={props.fotos[0].titulo}
      /> */}
    </div>
  );
}
export default Produto;
