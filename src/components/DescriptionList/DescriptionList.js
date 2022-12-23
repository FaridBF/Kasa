import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './descriptionList.css';

function DescriptionList({ accommodation }) {
  console.log('des', accommodation);
  const [description, setDescription] = useState(true);

  return (
    <>
      <section className='container-description-sections'>
        <div className='description-description-section'>
          <div onClick={() => setDescription(!description)}>
            <h1 className='title-description-section'>
              Description
              <span className='logo-description-section'>
                <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
              </span>
            </h1>
          </div>
          {description ? (
            <div className='container-description-section'>
              <p className='position-description-section'>
                {accommodation.description}
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default DescriptionList;
