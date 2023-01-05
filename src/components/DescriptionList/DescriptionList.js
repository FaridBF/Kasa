import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './descriptionList.css';

function DescriptionList({ data, title }) {
  console.log('data', data);
  const [newdata, setnewData] = useState(true);
  const [isDataList, setIsDataList] = useState(false);

  useEffect(() => {
    if (Array.isArray(data)) {
      setIsDataList(true);
    } else {
      setIsDataList(false);
    }
  }, []);

  return (
    <>
      <section className='container-description-sections'>
        <div className='description-description-section'>
          <div onClick={() => setnewData(!newdata)}>
            <h1 className='title-description-section'>
              {title}
              <span className='logo-description-section'>
                <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
              </span>
            </h1>
          </div>
          {newdata && isDataList && (
            <div className='container-description-section'>
              <div className='position-description-section'>
                {data.map((equipment, index) => {
                  return <p key={index}>{equipment}</p>;
                })}
              </div>
            </div>
          )}
          {newdata && !isDataList && (
            <div className='container-description-section'>
              <p className='position-description-section'>{data}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default DescriptionList;
