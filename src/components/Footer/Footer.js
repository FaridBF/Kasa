import { Link } from "react-router-dom";

import logoFooter from "../../assets/logo/logoFooter.png";
import brandFooter from "../../assets/brandFooter/allRightsReserved.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/">
        <img className="logo-footer" src={logoFooter} alt="logo Kasa" />
      </Link>
      <Link to="/">
        <img
          className="brand-footer"
          src={brandFooter}
          alt="logo allRightsReserved"
        />
      </Link>
    </div>
  );
}

export default Footer;
