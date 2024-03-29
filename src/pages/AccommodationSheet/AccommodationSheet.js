import { Navigate, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/Collapse/Collapse';
import notation from '../../components/Notation/Notation';
import Tag from '../../components/Tag/Tag';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/kasa.json';
import '../AccommodationSheet/accommodationSheet.css';
import '../../components/Collapse/collapse.css';

/** * Page affichant une fiche de logement * Hook useParams renvoie un objet de paires clé/valeur des paramètres dynamiques de l'URL actuelle. */ function AccommodationSheet() {
  let { uid } = useParams();
  const accommodation = data.find((item) => item.id === uid);
  return (
    <div>
      {accommodation ? (
        <>
          <Header /> <Carrousel data={accommodation.pictures} />
          <div className='section-container'>
            <div className='description-profil-section'>
              <h1 className='title-profil-section'>{accommodation.title}</h1>
              <p className='location-profil-section'>
                {accommodation.location}
              </p>
              <Tag data={accommodation.tags} />{' '}
            </div>
            <div className='profil-section'>
              <div className='profil-top-section'>
                <h2>{accommodation.host.name}</h2>{' '}
                <img
                  className='photo-profil'
                  src={accommodation.host.picture}
                  alt='illustration de profil'
                />
              </div>
              <div className='profil-bottom-section'>
                <span>{notation(accommodation.rating)}</span>{' '}
              </div>
            </div>
          </div>
          <div className='descriptionAndEquipement-section'>
            <section className='container-description-sections'>
              <div className='description-description-section'>
                <Collapse
                  widthSize='half'
                  data={accommodation.description}
                  title='Description'
                />
              </div>
              <div className='description-description-section'>
                <Collapse
                  widthSize='half'
                  data={accommodation.equipments}
                  title='Equipements'
                />
              </div>
            </section>
          </div>
          <Footer />
        </>
      ) : (
        <Navigate to='/error' />
      )}
    </div>
  );
}
export default AccommodationSheet;
