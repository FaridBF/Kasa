import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './collapse.css';

const Collapse = ({ data, title, widthSize }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div onClick={() => setIsOpen(!isOpen)}>
        <h1 className={`${widthSize}-section`}>
          {title}
          <span className={`${widthSize}-logo-section`}>
            <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
          </span>
        </h1>
      </div>
      {isOpen && (
        <div className={`${widthSize}-content`}>
          {isDataList ? (
            <div className={`${widthSize}-content-details`}>
              {data.map((equipment, index) => {
                return <p key={index}>{equipment}</p>;
              })}
            </div>
          ) : (
            <p className={`${widthSize}-content-details`}>{data}</p>
          )}
        </div>
      )}
    </>
  );
};
export default Collapse;
