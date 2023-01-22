import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/Collapse/Collapse';
import imageBannerAbout from '../../assets/images/banner-about.png';

import '../../components/Collapse/collapse.css';
import aboutData from '../../data/about-data.json';

function About() {
  return (
    <>
      <Header /> <Banner image={imageBannerAbout} />
      <section className='container-sections'>
        {aboutData.map((element, index) => {
          return (
            <div className='collapse-content-section' key={index}>
              <Collapse
                data={element.content}
                title={element.title}
                widthSize='full'
              />
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
export default About;
