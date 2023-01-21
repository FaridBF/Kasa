import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.js';
import Footer from '../../components/Footer/Footer';

import '../Home/home.css';

/**
 * Page d'accueil
 * La page d'accueil est la première page de notre site apparente côté utilisateur.
 */
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className='accomodations-section'>
        <Card />
      </section>
      <Footer />
    </>
  );
}

export default Home;
