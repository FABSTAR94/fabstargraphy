import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './Button.css';
import ballons from '../../../assets/ballons.webp';
import nillaflowers from '../../../assets/nillaflowers.webp';
import nillaselfie from '../../../assets/nillaselfie.webp';
import two from '../../../assets/two.webp';
import daisy from '../../../assets/daisy.webp';
import eli from '../../../assets/eli.webp';
import cute from '../../../assets/cute.webp';
import trust from '../../../assets/trust.webp';
import bash from '../../../assets/bash.webp';

class Family extends React.Component {
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={ballons} className="img-fluid img-hover" alt="ballons"/>
         <img src={daisy} className="img-fluid img-hover" alt="daisies"/>
         <img src={cute} className="img-fluid img-hover" alt="cute"/>
         </div>

         <div className="gallery-column">
         <img src={bash} className="img-fluid img-hover" alt="nephew"/>
         <img src={eli} className="img-fluid img-hover" alt="niece"/>
         <img src={two} className="img-fluid img-hover" alt="two"/>
         </div>

         <div className="gallery-column">
         <img src={nillaselfie} className="img-fluid img-hover" alt="nillaselfie"/>
         <img src={trust} className="img-fluid img-hover" alt="holding hands"/>
          <img src={nillaflowers} className="img-fluid img-hover" alt="dog with flowers"/>
         </div>

         </div>
         </div>
        </div>
    )
  }
  render(){
    const isMobile = window.innerWidth <= 600 ? true : false;
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
