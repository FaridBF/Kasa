import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import logoKasa from '../../assets/logo/logoKasa.png';

import './header.css';

/**
 * Fonction permettant la création de notre composant Header présent sur l'ensemble des pages du site
 * Menu de navigation permettant une redirection vers la page souhaitée via Link pour le logo et NavLink pour le menu (react-router-dom)
 */
function Header() {
  let activeStyle = {
    textDecoration: 'underline'
  };

  return (
    <div className='header-container'>
      <Link to='/'>
        <img className='logo-header' src={logoKasa} alt='logo kasa' />
      </Link>
      <nav>
        <ul className='menu-nav'>
          <li>
            <NavLink
              className='link-nav'
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className='link-nav'
              to='/about'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
