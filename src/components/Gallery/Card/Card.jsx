import React from 'react';
import './Card.css';
import mountains from '../../../assets/mountains.png';
import moon from '../../../assets/moon.png';


class Card extends React.Component {
  render(){
    const { image, title, clickEvent } = this.props;
    return (
      <div>
        <div className="col-md-4">
          <div onClick={clickEvent} className="fav-card">
          <img src={image} alt="mountains" className="img-fluid img-hover img-brightness"/>
          <div className="card-description">
          <h3>{title}</h3>
        </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Card;
