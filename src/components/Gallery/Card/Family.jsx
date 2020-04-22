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

class Family extends React.Component {
  render(){
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Gallery</span>
             <h2 className="fav-heading">Family</h2>
           </div>
            <SRLWrapper>
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
         <img src={nillaflowers} className="img-fluid img-hover" alt=""/>
         <img src={smile} className="img-fluid img-hover" alt=""/>
         <img src={two} className="img-fluid img-hover" alt=""/>
         </div>

         <div className="gallery-column">
         <img src={nillaselfie} className="img-fluid img-hover" alt=""/>
         <img src={sebash} className="img-fluid img-hover" alt=""/>
         </div>

         </div>
         </div>
        </div>
        </SRLWrapper>

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
