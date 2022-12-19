import "./card.css";

import data from "../../data/kasa.json";

function Card() {
  return (
    <>
      {data.map((element, id) => {
        console.log("element", element);
        return (
          <div key={id} className="card">
            <img
              className="cover-card"
              src={element.cover}
              alt={element.cover}
            />
            <div className="title-container-card">
              <h1 className="title-card">{element.title}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
