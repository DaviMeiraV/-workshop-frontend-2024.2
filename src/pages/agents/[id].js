import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AgentDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchAgentDetail = async () => {
        try {
          const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
          const data = await response.json();
          setAgent(data.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do agente:', error);
        }
      };

      fetchAgentDetail();
    }
  }, [id]);

  if (!agent) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={detailContainerStyle}>
      <h1>{agent.displayName}</h1>
      <img 
        src={agent.fullPortrait} 
        alt={agent.displayName} 
        style={detailImageStyle} 
      />
      <p style={detailRoleStyle}>
        <strong>Classe:</strong> {agent.role ? agent.role.displayName : 'Unknown Role'}
      </p>
      <p style={detailDescriptionStyle}>{agent.description}</p>
    </div>
  );
};

// Styles
const detailContainerStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const detailImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const detailRoleStyle = {
  marginTop: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const detailDescriptionStyle = {
  marginTop: '20px',
  fontSize: '16px',
  color: '#555',
};

export default AgentDetail;
