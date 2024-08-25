import React from 'react';

const Main = () => {
  return (
    <div>
      <header style={headerStyle}>
        <a href="/main" style={linkStyle}>Início</a>
        <a href="/agents" style={linkStyle}>Agentes</a>
      </header>

      <div style={mainContentStyle}>
        <h1>Bem-vindo ao Valorant</h1>
        <p>Explore os agentes e descubra suas habilidades únicas.</p>
      </div>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
};

const linkStyle = {
  backgroundColor: '#2f6b5d',
  color: '#fff',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
};

const mainContentStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '20px',
};

export default Main;
