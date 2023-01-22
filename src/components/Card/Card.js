import { useNavigate } from 'react-router-dom';
import './card.css';
/**
 * Composant permettant une redirection vers l'appartement via l'ID
 * Possible via le hook useNavigate()
 */
function Card({ accomodation }) {
  let navigate = useNavigate();

  const redirectionViaId = (userId) => {
    navigate('/accommodationSheet/' + userId, { replace: true });
  };

  return (
    <>
      <div onClick={() => redirectionViaId(accomodation.id)} className='card'>
        <img
          className='cover-card'
          src={accomodation.cover}
          alt={accomodation.cover}
        />
        <div className='title-container-card'>
          <h1 className='title-card'>{accomodation.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Card;
