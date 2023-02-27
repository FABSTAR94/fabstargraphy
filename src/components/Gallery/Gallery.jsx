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

//whenever you add a function to a class it becomes a method, so proper way to name it is METHOD, 
//handleCardOptionClick(), renderViewCard(), renderCards(), render() are all METHODS
const CARD_MAP = {
  'Landscape': bridalfall,
  'Nature': greenpath,
  'Black & White': hunter,
  'Silhouette': girlset,
  'Travel': eiffeltower,
  'Canela': canelajt,
}

// Object.keys()
// Object.values()
// Object.entries(CARD_MAP)
// returns...
// [
//   ['Landscape', bridalfall],
//   ['Nature', greenpath],
//   ['Black & White', hunter],
//   ['Silhouette', girlset],
//   ['Travel', eiffeltower],
//   ['Canela', canelajt],
// ]

//when creating react components using a class you have to extend to React.Compenent
class Gallery extends React.Component {
   state = {
    currentCard: null,
  }
/*defined a method called handleCardOptionClick, and this.setStae is what changes state.
It was previosuly null then dependingon what user clicks, state gets set to that card.*/
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
    /*Object.entries returns an array of arrays containing the key value pairs of the Object CARD_MAP.
    .map method iterates over every element in the array and returns 
     'Landscape': bridalfall,
     'Nature': greenpath,
     'Black & White': hunter,
     'Silhouette': girlset,
     'Travel': eiffeltower,
     'Canela': canelajt,
     --------------------------
    [
    ['Landscape', bridalfall]
    ['Nature', greenpath]
    ['Silhouette', girlset]
    ['Travel', eiffeltower]
    ['Canela', canelajt]
     ]
    */
   //card param is each array and the idx is the index of one array. 
    return Object.entries(CARD_MAP).map((card, idx) => {
      return (
        // whenever you pass on props to a react component you set a property, in this case key, clickEvent, title, image
        <Card
        // google what key is, and idx in this is referring to the index of a specific array inside the array of arrays
          key={idx}
          // if u click on it set that specific card title because index 0 is the title inside array of arrays
          clickEvent={() => this.handleCardOptionClick(card[0])}
          // you are getting title and image props from the Card.jsx file
          // you add these properties to display what the title and image is for each card, else it will just 
          // display an empty card to the user
          title={card[0]}
          image={card[1]}
        />
      )
    })
  }
// Everytime state is changed the render method gets invoked
  render(){
    return(
      <div>
        {/* {renderViewCard method default is null which null is faulty, so here you are saying renderViewCard is NOT false so it is TRUE//} */}
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
