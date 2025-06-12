import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/admin/messages', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data);
      } catch (err) {
        console.error('Erreur:', err);
      }
    };
    fetchMessages();
  }, []);

  if (!user) return <div>Accès refusé</div>;

  return (
    <div>
      <h1>Dashboard Admin</h1>
      <button onClick={logout}>Déconnexion</button>
      
      <h2>Messages des clients</h2>
      <ul>
        {messages.map(msg => (
          <li key={msg._id}>
            <p>{msg.content}</p>
            <small>{msg.email}</small>
            <button onClick={() => handleDelete(msg._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
