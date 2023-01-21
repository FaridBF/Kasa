import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './description.css';

/**
 * Composant permettant la gestion de la page A propos et de la partie descriptif/équipement de la page accomadationSheet
 * Utilisation des states sous d'un booléen pour l'affichage des différents descriptifs demandés
 */
function Description({ data, title }) {
  const location = useLocation();
  const currentURLPathname = location.pathname;

  const [newdata, setnewData] = useState(true);
  const [isDataList, setIsDataList] = useState(false);
  const [reliability, setReliability] = useState(true);
  const [respect, setRespect] = useState(true);
  const [service, setService] = useState(true);
  const [security, setSecurity] = useState(true);

  useEffect(() => {
    if (Array.isArray(data)) {
      setIsDataList(true);
    } else {
      setIsDataList(false);
    }
  }, []);

  return (
    <>
      {currentURLPathname === '/about' ? (
        <>
          <section className='container-sections'>
            <div className='reliability-section'>
              <div onClick={() => setReliability(!reliability)}>
                <h1 className='title-section'>
                  Fiabilité
                  <span className='logo-section'>
                    <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                  </span>
                </h1>
              </div>
              {reliability ? (
                <div className='description-section'>
                  <p>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                  </p>
                </div>
              ) : null}
            </div>
            <div className='respect-section'>
              <div onClick={() => setRespect(!respect)}>
                <h1 className='title-section'>
                  Respect
                  <span className='logo-section'>
                    <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                  </span>
                </h1>
              </div>
              {respect ? (
                <p className='description-section'>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
                </p>
              ) : null}
            </div>
            <div className='service-section'>
              <div onClick={() => setService(!service)}>
                <h1 className='title-section'>
                  Service
                  <span className='logo-section'>
                    <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                  </span>
                </h1>
              </div>
              {service ? (
                <p className='description-section'>
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
                </p>
              ) : null}
            </div>
            <div className='security-section'>
              <div onClick={() => setSecurity(!security)}>
                <h1 className='title-section'>
                  Sécurité
                  <span className='logo-section'>
                    <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                  </span>
                </h1>
              </div>
              {security ? (
                <p className='description-section'>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </p>
              ) : null}
            </div>
          </section>
        </>
      ) : (
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
      )}
    </>
  );
}

export default Description;
