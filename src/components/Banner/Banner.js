import './banner.css';
/**
 * Composant permettant d'alterner la bannière selon la page
 */
function Banner({ image, title }) {
  return (
    <div className='banner-container'>
      <img className='banner-img' src={image} alt='bannière' />
      {title && <h1 className='title-banner'>{title}</h1>}
    </div>
  );
}

export default Banner;
