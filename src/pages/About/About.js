import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/Collapse/Collapse';

import imageBannerAbout from '../../assets/images/banner-about.png';
/**
 * Page A propos
 */
function About() {
  const isPageAbout = true;
  return (
    <>
      <Header />
      <Banner image={imageBannerAbout} />
      <Collapse isPageAbout={isPageAbout} />
      <Footer />
    </>
  );
}

export default About;

/**
 *
 */
