import "./card.css";
import data from "../../data/kasa.json";

import { useNavigate } from "react-router-dom";

function Card() {
  let navigate = useNavigate();

  const redirectionViaId = (userId) => {
    navigate("/accommodationSheet/" + userId, { replace: true });
  };

  return (
    <>
      {data.map((element, id) => {
        // console.log("element", element);
        return (
          <div
            onClick={() => redirectionViaId(element.id)}
            key={id}
            className="card"
          >
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
