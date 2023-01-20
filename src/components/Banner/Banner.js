import { useLocation } from 'react-router';

import bannerHome from '../../assets/images/banner-home.png';
import bannerAbout from '../../assets/images/banner-about.png';

import './banner.css';

/**
 * Fonction permettant d'alterner la bannière selon la page
 * Possible via le hook useLocation() reprenant le chemin courant
 */
function Banner() {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  return (
    <>
      {currentURLPathname === '/' ? (
        <>
          <div className='banner-container'>
            <img className='banner-img' src={bannerHome} alt='bannière' />
            <h1 className='title-banner'>Chez vous, partout et ailleurs</h1>
          </div>
        </>
      ) : (
        <>
          <div className='banner-container'>
            <img className='banner-img' src={bannerAbout} alt='bannière' />
          </div>
        </>
      )}
    </>
  );
}

export default Banner;
