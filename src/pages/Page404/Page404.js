import Header from '../../components/Header/Header';

import './page404.css';

/**
 * La page 404 est renvoyée pour chaque route inexistante, ou si une
 * valeur présente dans l’URL ne fait pas partie des données renseignées
 */
function Page404() {
  return (
    <>
      <Header />
      <div className='container-error404'>
        <h1 className='title-error404'>404</h1>
        <h2 className='description-error404'>
          Oups! La page que vous demandez n'existe pas.
        </h2>

        <a className='link-home' href='/'>
          <p>Retourner sur la page d'accueil</p>
        </a>
      </div>
    </>
  );
}

export default Page404;
