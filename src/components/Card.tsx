import React from 'react';
import { Plante } from '../pages/Home';

interface CardProp {
    plante: Plante
}

const Card = ({ plante }: CardProp) => {
  return (
    <div>
      <div className="container text-center">
        <div className="row" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <div className="col">
            <div className="card" style={{ width: "12rem", height: "22rem" }}>
              <img
                src={`http://localhost:8080/assets/${plante.url_picture}`}
                className="card-img-top"
                alt="plantes"
              />
              <div className="card-body">
                <h5 className="card-title">{plante.name}</h5>
                <p className="card-text">
                  {plante.category} - 💵 {plante.unitprice_ati}€ - ⭐
                  {plante.rating}
                </p>
                <a href="#" className="btn btn-primary">
                  BUY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;