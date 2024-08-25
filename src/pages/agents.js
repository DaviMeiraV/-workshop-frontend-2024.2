
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        setAgents(data.data);
      } catch (error) {
        console.error('Erro ao buscar agentes:', error);
      }
    };

    fetchAgents();
  }, []);

  const filteredAgents = agents.filter(agent =>
    agent.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToDetailPage = (id) => {
    router.push(`/agents/${id}`);
  };

  return (
    <div>
      <header style={headerStyle}>
        <a href="/main" style={linkStyle}>Início</a>
        <a href="/agents" style={linkStyle}>Agentes</a>
      </header>

      <div style={searchStyle}>
        <input
          type="text"
          placeholder="Pesquisar agentes..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={gridStyle}>
        {filteredAgents.map(agent => (
          <div key={agent.uuid} style={cardStyle}>
            <img 
              src={agent.displayIcon} 
              alt={agent.displayName} 
              style={imageStyle} 
            />
            <h3>{agent.displayName}</h3>
            <p>{agent.role ? agent.role.displayName : 'Unknown Role'}</p>
            <button 
              style={detailButtonStyle} 
              onClick={() => goToDetailPage(agent.uuid)}
            >
              Ver Detalhes
            </button>
          </div>
        ))}
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

const searchStyle = {
  margin: '20px 0',
  textAlign: 'center',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '80%',
  maxWidth: '500px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  padding: '0 20px',
};

const cardStyle = {
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const detailButtonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#2f6b5d',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default Agents;
