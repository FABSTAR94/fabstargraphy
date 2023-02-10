import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './Button.css';
import canelajt from '../../../assets/canelajt.png';
import nillaselfie from '../../../assets/nillaselfie.png';

class Canela extends React.Component {
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={canelajt} className="img-fluid img-hover" alt="Canela in Joshua Tree"/>
         </div>

         <div className="gallery-column">
         </div>

         <div className="gallery-column">
         <img src={nillaselfie} className="img-fluid img-hover" alt="nillaselfie"/>
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
             <h2 className="fav-heading">Canela</h2>
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

export default Canela;
