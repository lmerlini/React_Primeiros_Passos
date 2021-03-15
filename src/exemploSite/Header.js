import React from 'react';
import '../styles/index.css';
function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/sobre"> Sobre</a>
        </li>
        <li>
          <a href="/contato"> Contato</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
