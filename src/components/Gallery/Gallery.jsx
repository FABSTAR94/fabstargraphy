import React from 'react';
import './Gallery.css';
import Footer from '../App/Footer.jsx';
import Card from '././Card/Card.jsx';
import Nature from '././Card/Nature.jsx';
import Travel from '././Card/Travel.jsx';
import Bw from '././Card/Bw.jsx';
import Silhouette from '././Card/Silhouette.jsx';
import Landscape from '././Card/Landscape.jsx';
import Family from '././Card/Family.jsx';
import gt from '../../assets/gt.png';
import hunter from '../../assets/hunter.png';
import girlset from '../../assets/girlset.png';
import bridalfall from '../../assets/bridalfall.jpg';
import ballons from '../../assets/ballons.png';
import eiffeltower from '../../assets/eiffeltower.jpeg';
const CARD_MAP = [
  {
    title: 'Landscape',
    image: bridalfall,
  },
  {
    title: 'Nature',
    image: gt,
  },
  {
    title: 'Black & White',
    image: hunter,
  },
  {
    title: 'Silhouette',
    image: girlset,
  },
  {
    title: 'Travel',
    image: eiffeltower,
  },
  {
    title: 'Family',
    image: ballons,
  }
]

const CARD_OPTIONS = [
  'Landscape',
  'NATURE',
  'Bw',
  'Silhouette',
  'Travel',
  'Family',
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
      case 'Landscape':
        return (
         <div>
          <Landscape
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
        case 'Bw':
        return (
          <div>
            <Bw
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
        case 'Silhouette':
        return (
          <div>
            <Silhouette
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
         case 'Travel':
        return (
          <div>
            <Travel
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
        case 'Family':
        return (
          <div>
            <Family
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

                  {this.renderCards()}
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
