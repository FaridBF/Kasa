import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.js';
import Footer from '../../components/Footer/Footer';

import data from '../../data/kasa.json';
import imageBannerHome from '../../assets/images/banner-home.png';

import '../Home/home.css';
/**
 * Page d'accueil
 * La page d'accueil est la première page de notre site apparente côté utilisateur.
 */
function Home() {
  const title = 'Chez vous, partout et ailleurs';

  return (
    <>
      <Header />
      <Banner image={imageBannerHome} title={title} />
      <section className='accomodations-section'>
        {data.map((accomodation, index) => (
          <Card key={index} accomodation={accomodation} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Home;
