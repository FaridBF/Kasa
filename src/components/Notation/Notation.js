import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Fonction permettant de récupérer la notation exacte selon la fiche du logement affiché
 * Réalisation via une boucle
 */
const notation = (num) => {
  const tab = [];
  for (let i = 0; i < 5; i++) {
    if (i < num) {
      tab.push(
        <FontAwesomeIcon icon='fa-solid fa-star' key={i} color='#FF6060' />
      );
    } else {
      tab.push(
        <FontAwesomeIcon icon='fa-solid fa-star' key={i} color='#E3E3E3' />
      );
    }
  }
  return tab;
};

export default notation;
