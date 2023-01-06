import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Description from "../../components/Description/Description";
import notation from "../../components/Notation/Notation";

import data from "../../data/kasa.json";

import "../AccommodationSheet/accommodationSheet.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router";
import Tag from "../../components/Tag/Tag";

function AccommodationSheet() {
  let { uid } = useParams();
  // console.log('params', uid);

  const accommodation = data.filter((item) => item.id === uid)[0];
  // console.log(accommodation);

  return (
    <>
      <Header />

      <div id="carrousel">
        <div id="container">
          <FontAwesomeIcon
            id="g"
            className="bouton"
            icon="fa-solid fa-chevron-left"
          />
          <FontAwesomeIcon
            id="d"
            className="bouton"
            icon="fa-solid fa-chevron-right"
          />
        </div>
      </div>
      <div className="section-container">
        <div className="description-profil-section">
          <h1 className="title-profil-section">{accommodation.title}</h1>
          <p className="location-profil-section">{accommodation.location}</p>
          <Tag data={accommodation.tags} />
        </div>
        <div className="profil-section">
          <div className="profil-top-section">
            <h2>{accommodation.host.name}</h2>
            <img
              className="photo-profil"
              src={accommodation.host.picture}
              alt="illustration de profil"
            />
          </div>
          <div className="profil-bottom-section">
            <span>{notation(accommodation.rating)}</span>
          </div>
        </div>
      </div>
      <div className="descriptionAndEquipement-section">
        <Description data={accommodation.description} title="Description" />
        <Description data={accommodation.equipments} title="Equipements" />
      </div>
      <Footer />
    </>
  );
}

export default AccommodationSheet;
