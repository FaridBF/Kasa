import { useNavigate } from 'react-router-dom';
import './card.css';
/**
 * Composant permettant une redirection vers l'appartement via l'ID
 * Possible via le hook useNavigate()
 */
function Card({ element }) {
  let navigate = useNavigate();

  const redirectionViaId = (userId) => {
    navigate('/accommodationSheet/' + userId, { replace: true });
  };

  return (
    <>
      <div onClick={() => redirectionViaId(element.id)} className='card'>
        <img className='cover-card' src={element.cover} alt={element.cover} />
        <div className='title-container-card'>
          <h1 className='title-card'>{element.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Card;
