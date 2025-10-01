import { useNavigate } from 'react-router-dom';
import gameImg from '../assets/game.png'; // adjust path if needed

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ textAlign: 'center', padding: '10px' }}>
      <img 
        src={gameImg} 
        alt="Game" 
        style={{ width: '100px', height: '100px', marginBottom: '10px' }} 
      />
      <h2>Play Game</h2>
      <button onClick={() => navigate('/game')}>Go to Game</button>
    </div>
  );
};

export default Card;


{/* <button onClick={() => navigate('/game')}>Go to Game</button> */}