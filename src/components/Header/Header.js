import { Link } from "react-router-dom";

import logoKasa from "../../assets/logo/logoKasa.png";

import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo-header" src={logoKasa} alt="logo kasa" />
      </Link>
      <nav>
        <ul className="menu-nav">
          <li>
            <a className="link-nav" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a className="link-nav" href="/about">
              A Propos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
