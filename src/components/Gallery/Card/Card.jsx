import React from 'react';
import './Card.css';
import styled from 'styled-components';

class Card extends React.Component {
  render(){
    const { image, title, clickEvent } = this.props;
    return (
      <div>
        <div class="col-12 col-xs-12 col-md-8 col-lg-4 col-xl-4">
          <PhotoCard
            image={image}
            onClick={clickEvent}
            className="img-fluid img-brightness img-hover"
            />
          <div className="card-description" >
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

const PhotoCard = styled.div`
  margin-top: 20px;
  background-position: 40% 20%;
  background-size: cover;
  height: 400px;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(6,6,6,0.56);
  border-radius: 5px;
  background-color: white;
  background-image: url(${(props) => props.image});
`;



