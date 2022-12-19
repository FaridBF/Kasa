import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoFooter from "../../assets/logo/logoFooter.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/">
        <img className="logo-footer" src={logoFooter} alt="logo Kasa" />
      </Link>
      <a className="description-footer" href="/">
        <FontAwesomeIcon icon="fa-regular fa-copyright" />
        2020 Kasa.All rights reserved
      </a>
    </div>
  );
}

export default Footer;
