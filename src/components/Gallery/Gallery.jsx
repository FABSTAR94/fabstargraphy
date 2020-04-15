import React from 'react';
import './Gallery.css';
import Footer from '../App/Footer.jsx';
import mountains from '../../assets/mountains.png';
import moon from '../../assets/moon.png';
import Card from '././Card/Card.jsx';
import Nature from '././Card/Nature.jsx';
import Sky from '././Card/Sky.jsx';

const CARD_MAP = [
  {
    title: 'Sky',
    image: moon,
  },
  {
    title: 'Nature',
    image: mountains,
  },
  {
    title: 'Sky',
    image: moon,
  },
  {
    title: 'Nature',
    image: mountains,
  },
  {
    title: 'Sky',
    image: moon,
  },
  {
    title: 'Nature',
    image: mountains,
  }
]

const CARD_OPTIONS = [
  'SKY',
  'NATURE',
  'SKY',
  'SKY',
  'SKY',
  'SKY',
];

class Gallery extends React.Component {
   state = {
    currentCard: null,
  }

  handleCardOptionClick(idx) {
    this.setState({ currentCard: CARD_OPTIONS[idx] })
  }

  renderViewCard() {
    const { currentCard } = this.state;

    switch(currentCard) {
      case 'SKY':
        return (
         <div>
          <Sky
            backAction={() => this.setState({ currentCard: undefined })}
           />
         </div>
        );
        case 'NATURE':
        return (
          <div>
            <Nature
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
      default:
        return null;
    }
  }

  renderCards() {
    return CARD_MAP.map((card, idx) => {
      return (
        <Card
          key={idx}
          clickEvent={() => this.handleCardOptionClick(idx)}
          image={card.image}
          title={card.title}
        />
      )
    })
  }

  render(){
    return(
      <div>
      {!this.renderViewCard() &&
        <div className="fav-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span>What I do</span>
                <h2 className="fav-heading">Gallery</h2>
                 <div className="row">
                  {this.renderCards()}
                </div>
            </div>
          </div>
        </div>
      </div>
      }
      {this.renderViewCard()}
      <Footer />
      </div>
    );
  }
}

export default Gallery;
