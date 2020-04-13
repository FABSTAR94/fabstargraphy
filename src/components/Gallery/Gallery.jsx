import React from 'react';
import './Gallery.css';
import Card from './Card.jsx';
import Footer from '../App/Footer.jsx';

class Gallery extends React.Component {
  render(){
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span>What I do</span>
                <h2 className="fav-heading">Gallery</h2>
                 <div className="row">
                  <Card />
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
