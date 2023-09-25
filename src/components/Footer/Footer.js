// Footer.js
import React from 'react';
import './Footer.css'; // Importe um arquivo CSS para estilização

function Footer() {
  return (
    <footer className="fixed-footer"> {/* Adicione uma classe CSS para estilização */}
      <div className="footer-content">
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
