import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './Button.css';
import ballons from '../../../assets/ballons.png';
import nillaflowers from '../../../assets/nillaflowers.png';
import nillaselfie from '../../../assets/nillaselfie.png';
import smile from '../../../assets/smile.png';
import two from '../../../assets/two.png';
import sebash from '../../../assets/sebash.png';
import daisy from '../../../assets/daisy.png';
import eli from '../../../assets/eli.png';
import cute from '../../../assets/cute.png';
import trust from '../../../assets/trust.jpeg';
import bash from '../../../assets/bash.jpeg';

class Family extends React.Component {
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={ballons} className="img-fluid img-hover" alt=""/>
         <img src={daisy} className="img-fluid img-hover" alt=""/>
         <img src={cute} className="img-fluid img-hover" alt=""/>
         </div>

         <div className="gallery-column">
         <img src={eli} className="img-fluid img-hover" alt=""/>
         <img src={bash} className="img-fluid img-hover" alt=""/>
         <img src={nillaflowers} className="img-fluid img-hover" alt=""/>
         <img src={smile} className="img-fluid img-hover" alt=""/>
         </div>

         <div className="gallery-column">
         <img src={nillaselfie} className="img-fluid img-hover" alt=""/>
         <img src={trust} className="img-fluid img-hover" alt=""/>
         <img src={two} className="img-fluid img-hover" alt=""/>
         </div>

         </div>
         </div>
        </div>
    )
  }
  render(){
    const isMobile = window.innerWidth <= 425 ? true : false;
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Gallery</span>
             <h2 className="fav-heading">Family</h2>
           </div>
              {isMobile ?
              <div>{this.renderImages()}</div>
              : <SRLWrapper>{this.renderImages()}</SRLWrapper>}
        <div class="btn-center">
        <button class="back-btn"onClick={backAction}>Back</button>
        </div>
          </div>
          </div>
          </div>
  )
  }
}

export default Family;
