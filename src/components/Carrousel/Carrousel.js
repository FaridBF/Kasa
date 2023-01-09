import React, { useEffect, useState } from "react";

import "./carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrousel(data) {
  const pictures = data.data;
  console.log(pictures, "pictures");
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(pictures[index]);

  console.log(currentImage, "currentImage");
  console.log(index, "index");

  useEffect(() => {
    setCurrentImage(pictures[index]);
  }, [index, pictures]);

  // Créez une fonction qui permet de passer à l'image suivante dans le carrousel
  const handleNextClick = () => {
    // Si l'index actuel est le dernier élément du tableau, retournez à l'index 0
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      // Sinon, passez à l'image suivante en incrémentant l'index actuel
      setIndex(index + 1);
    }
  };

  // Créez une fonction qui permet de passer à l'image précédente dans le carrousel
  const handlePreviousClick = () => {
    // Si l'index actuel est 0, passez à l'index du dernier élément du tableau
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      // Sinon, passez à l'image précédente en décrémentant l'index actuel
      setIndex(index - 1);
    }
  };

  return (
    <div id="carrousel">
      <div id="container">
        <FontAwesomeIcon
          onClick={handlePreviousClick}
          id="g"
          className="bouton"
          icon="fa-solid fa-chevron-left"
        />
        <img className="img-carrousel" src={currentImage} alt={currentImage} />
        <div className="counter-carrousel">
          {index + 1}/{pictures.length}
        </div>
        <FontAwesomeIcon
          onClick={handleNextClick}
          id="d"
          className="bouton"
          icon="fa-solid fa-chevron-right"
        />
      </div>
    </div>
  );
}

export default Carrousel;
