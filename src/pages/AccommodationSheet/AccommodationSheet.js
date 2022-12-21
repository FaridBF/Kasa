import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import data from "../../data/kasa.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router";

function AccommodationSheet() {
  let { uid } = useParams();
  console.log("params", uid);

  const accommodation = data.filter((item) => item.id === uid)[0];
  console.log(accommodation);

  return (
    <>
      <Header />
      <div>
        <p>AccommodationSheet</p>
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </div>
      <Footer />
    </>
  );
}

export default AccommodationSheet;
