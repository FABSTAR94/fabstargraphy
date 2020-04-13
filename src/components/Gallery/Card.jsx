import React from 'react';
import './Card.css';
import mountains from '../../assets/mountains.png';
import moon from '../../assets/moon.png';

class Card extends React.Component {
  render(){
  return (
    <div>
    <div className="row">
    <div className="col-md-4">
    <div className="fav-card">
    <img src={mountains} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Nature</h3>
      </div>
      </div>
      </div>

      <div className="col-md-4">
    <div className="fav-card">
    <img src={moon} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Sky</h3>
      </div>
      </div>
      </div>

      <div className="col-md-4">
    <div className="fav-card">
    <img src={mountains} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Nature</h3>
      </div>
      </div>
      </div>

      <div className="col-md-4">
    <div className="fav-card">
    <img src={moon} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Sky</h3>
      </div>
      </div>
      </div>

      <div className="col-md-4">
    <div className="fav-card">
    <img src={mountains} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Nature</h3>
      </div>
      </div>
      </div>

      <div className="col-md-4">
    <div className="fav-card">
    <img src={moon} alt="mountains" className="img-fluid img-hover img-brightness"/>
    <div className="card-description">
    <h3>Sky</h3>
      </div>
      </div>
      </div>
    </div>
    </div>
    )
}
}

export default Card;
