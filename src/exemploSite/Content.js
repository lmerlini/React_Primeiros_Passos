import React from 'react';
import '../styles/index.css';

function Content(props) {
  const [avisar, setAvisar] = React.useState(null);
  function handleClick(e) {
    setAvisar(avisar + 1);
  }

  return (
    <>
      <article className={'content'}>
        <h1
          style={{
            textAlign: 'center',
            paddingTop: '1.5rem',
            backgroundColor: '#9C9C9C',
          }}
        >
          Conteúdo
        </h1>
        <section
          style={{
            width: '100%',
            height: 250,
            backgroundColor: '#363640',
            color: '#fff',
            textAlign: 'justify',
            padding: '20px 15px 0 25px',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam
            laborum tempore provident aspernatur quam quia consequuntur, in
            neque eum aut illo a eligendi est odio eius ducimus quasi fuga.
          </p>
          <br />
          <button style={{ display: 'flex' }}>Conheça Já</button>
        </section>
      </article>
    </>
  );
}

export default Content;
