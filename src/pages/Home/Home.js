import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.js';
import Footer from '../../components/Footer/Footer';

import '../Home/home.css';

import data from '../../data/kasa.json';

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
        {data.map((element, index) => (
          <Card key={index} element={element} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Home;
