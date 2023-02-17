import React from 'react';
import './Gallery.css';
import Footer from '../App/Footer.jsx';
import Card from '././Card/Card.jsx';
import Nature from '././Card/Nature.jsx';
import Travel from '././Card/Travel.jsx';
import Bw from '././Card/Bw.jsx';
import Silhouette from '././Card/Silhouette.jsx';
import Landscape from '././Card/Landscape.jsx';
import Canela from '././Card/Canela.jsx';
import greenpath from '../../assets/greenpath.webp';
import hunter from '../../assets/hunter.png';
import girlset from '../../assets/girlset.png';
import bridalfall from '../../assets/bridalfall.jpg';
import canelajt from '../../assets/canelajt.png';
import eiffeltower from '../../assets/eiffeltower.jpeg';

const CARD_MAP = {
  'Landscape': bridalfall,
  'Nature': greenpath,
  'Black & White': hunter,
  'Silhouette': girlset,
  'Travel': eiffeltower,
  'Canela': canelajt,
}

class Gallery extends React.Component {
   state = {
    currentCard: null,
  }

  handleCardOptionClick(title) {
    this.setState({ currentCard: title })
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
        case 'Nature':
        return (
          <div>
            <Nature
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
        case 'Black & White':
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
        case 'Canela':
        return (
          <div>
            <Canela
              backAction={() => this.setState({ currentCard: undefined })}
            />
         </div>
        );
      default:
        return null;
    }
  }

  renderCards() {
    return Object.entries(CARD_MAP).map((card, idx) => {
      return (
        <Card
          key={idx}
          clickEvent={() => this.handleCardOptionClick(card[0])}
          image={card[1]}
          title={card[0]}
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
