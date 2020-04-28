import React from 'react';
import './Card.css';
import styled from 'styled-components';

class Card extends React.Component {
  state = {
    darkenBackGround: false,
  }

  setIsShown(value) {
    this.setState({ darkenBackGround: value });
  }


  render(){
    const { image, title, clickEvent,} = this.props;
    const { darkenBackGround } = this.state;
    return (
      <div>
        <div class="col-12 col-xs-12 col-md-8 col-lg-4 col-xl-4">
          <PhotoCard
            image={image}
            onClick={clickEvent}
            className="img-fluid img-brightness img-hover"
            overRideHover={darkenBackGround}
            >

            </PhotoCard>
            <Content
              onClick={clickEvent}
              onMouseEnter={() => this.setIsShown(true)}
              onMouseLeave={() => this.setIsShown(false)}
            >
              <h3>{title}</h3>
            </Content>
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
  background-color: #a6a6a6;
  background-image: url(${(props) => props.image});
  filter: ${(props) => props.overRideHover ? 'brightness(50%)' : ''};

  &:hover {
    filter: brightness(50%);
    cursor: pointer;
  }

`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  margin-top: -100px;
  width: 100%;


  &:hover {
    cursor: pointer;
  }
  & h3 {
    font-weight: 900 !important;
    font-size: 30px !important;
    color: #FFF;
  }
`;



