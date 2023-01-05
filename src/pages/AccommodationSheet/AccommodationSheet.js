import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DescriptionList from '../../components/DescriptionList/DescriptionList';
import notation from '../../components/Notation/Notation';

import data from '../../data/kasa.json';

import '../AccommodationSheet/accommodationSheet.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useParams } from 'react-router';

function AccommodationSheet() {
  let { uid } = useParams();
  console.log('params', uid);

  const accommodation = data.filter((item) => item.id === uid)[0];
  console.log(accommodation);

  return (
    <>
      <Header />

      <div id='carrousel'>
        <div id='container'>
          <FontAwesomeIcon
            id='g'
            className='bouton'
            icon='fa-solid fa-chevron-left'
          />
          <FontAwesomeIcon
            id='d'
            className='bouton'
            icon='fa-solid fa-chevron-right'
          />
        </div>
      </div>
      <div className='section-container'>
        <div className='description-profil-section'>
          <h1 className='title-profil-section'>{accommodation.title}</h1>
          <p className='location-profil-section'>{accommodation.location}</p>
          {accommodation.tags.map((tag, index) => {
            return (
              <span className='tag-profil-section' key={index}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className='profil-section'>
          <div className='profil-top-section'>
            <h2>{accommodation.host.name}</h2>
            <img
              className='photo-profil'
              src={accommodation.host.picture}
              alt='illustration de profil'
            />
          </div>
          <div className='profil-bottom-section'>
            <span>{notation(accommodation.rating)}</span>
          </div>
        </div>
      </div>
      <div className='descriptionAndEquipement-section'>
        <DescriptionList data={accommodation.description} title='Description' />
        <DescriptionList data={accommodation.equipments} title='Equipements' />
      </div>
      <Footer />
    </>
  );
}

export default AccommodationSheet;
