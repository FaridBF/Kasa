import React, { useEffect, useState } from "react";

import "./carrousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrousel(data) {
  const pictures = data.data;
  console.log(pictures, "pictures");
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(pictures[index]);

  console.log(currentImage, "currentImage");

  useEffect(() => {
    setCurrentImage(pictures[index]);
  }, [index, pictures]);

  const handlePreviousClick = () => {
    let newIndex = index - 1;
    setIndex(newIndex);
  };

  const handleNextClick = () => {
    let newIndex2 = index + 1;
    setIndex(newIndex2);
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
        <img src={currentImage} alt="carrousel" />
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
