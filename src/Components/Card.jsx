import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>Play Game</h2>
      <button onClick={() => navigate('/game')}>Go to Game</button>
    </div>
  );
};

export default Card;
