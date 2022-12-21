import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./toogleList.css";

function ToogleList() {
  const [reliability, setReliability] = useState(true);
  const [respect, setRespect] = useState(true);
  const [service, setService] = useState(true);
  const [responsibility, setResponsibility] = useState(true);

  return (
    <>
      <section className="container-sections">
        <div className="reliability-section">
          <div onClick={() => setReliability(!reliability)}>
            <h1 className="title-section">
              Fiabilité
              <span className="logo-section">
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
              </span>
            </h1>
          </div>
          {reliability ? (
            <div className="description-section">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio reprehenderit totam voluptate voluptatem nam?
                Nesciunt, eveniet itaque! Enim voluptatibus quasi necessitatibus
                nobis ipsa ut aliquam
              </p>
            </div>
          ) : null}
        </div>
        <div className="respect-section">
          <div onClick={() => setRespect(!respect)}>
            <h1 className="title-section">
              Respect
              <span className="logo-section">
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
              </span>
            </h1>
          </div>
          {respect ? (
            <p className="description-section">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio reprehenderit totam voluptate voluptatem nam? Nesciunt,
              eveniet itaque! Enim voluptatibus quasi necessitatibus nobis ipsa
              ut aliquam
            </p>
          ) : null}
        </div>
        <div className="service-section">
          <div onClick={() => setService(!service)}>
            <h1 className="title-section">
              Service
              <span className="logo-section">
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
              </span>
            </h1>
          </div>
          {service ? (
            <p className="description-section">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio reprehenderit totam voluptate voluptatem nam? Nesciunt,
              eveniet itaque! Enim voluptatibus quasi necessitatibus nobis ipsa
              ut aliquam
            </p>
          ) : null}
        </div>
        <div className="responsibility-section">
          <div onClick={() => setResponsibility(!responsibility)}>
            <h1 className="title-section">
              Responsabilité
              <span className="logo-section">
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
              </span>
            </h1>
          </div>
          {responsibility ? (
            <p className="description-section">
              La bienvaillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de votre plateforme
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default ToogleList;
