import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './equipmentList.css';

function EquipmentList({ accommodation }) {
  const [equipment, setEquipment] = useState(true);

  return (
    <>
      <section className='container-equipment-sections'>
        <div className='equipment-section'>
          <div onClick={() => setEquipment(!equipment)}>
            <h1 className='title-equipment-section'>
              Équipements
              <span className='logo-equipment-section'>
                <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
              </span>
            </h1>
          </div>
          {equipment ? (
            <div className='description-equipment-section'>
              <p className='position-equipment-section'>
                {accommodation.equipments.map((equipment, index) => {
                  return <p key={index}>{equipment}</p>;
                })}
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default EquipmentList;
