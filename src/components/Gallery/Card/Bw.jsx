import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import fairy from '../../../assets/fairy.webp';
import red from '../../../assets/red.webp';
import hunter from '../../../assets/hunter.webp';
import purp from '../../../assets/purp.webp';
import ridinghood from '../../../assets/ridinghood.webp';
import palmtrees from '../../../assets/palmtrees.webp';
import converse from '../../../assets/converse.webp';
import lux from '../../../assets/lux.webp';
import boots from '../../../assets/boots.webp';
import head from '../../../assets/head.webp';
import fly from '../../../assets/fly.webp';
import moon1 from '../../../assets/moon1.webp';
import moon2 from '../../../assets/moon2.webp';
import fullmoon from '../../../assets/fullmoon.webp';
import grave from '../../../assets/grave.webp';
import undermoon from '../../../assets/undermoon.webp';

class Bw extends React.Component {
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={boots} className="img-fluid img-hover" alt="boots"/>
         <img src={lux} className="img-fluid img-hover" alt="guy"/>
         <img src={fairy} className="img-fluid img-hover" alt="fairy"/>
         <img src={red} className="img-fluid img-hover" alt="red"/>
         <img src={fullmoon} className="img-fluid img-hover" alt="fullmoon"/>
         </div>

         <div className="gallery-column">
         <img src={purp} className="img-fluid img-hover" alt="purpleflower"/>
         <img src={palmtrees} className="img-fluid img-hover" alt="palmtrees"/>
         <img src={moon1} className="img-fluid img-hover" alt="moonphase"/>
         <img src={grave} className="img-fluid img-hover" alt="grave"/>
         </div>

         <div className="gallery-column">
         <img src={converse} className="img-fluid img-hover" alt="converse"/>
         <img src={undermoon} className="img-fluid img-hover" alt="Floating under the moonlight"/>
         <img src={hunter} className="img-fluid img-hover" alt="hunterboots"/>
         <img src={ridinghood} className="img-fluid img-hover" alt="ridinghood"/>
         <img src={head} className="img-fluid img-hover" alt="head"/>
         <img src={fly} className="img-fluid img-hover" alt="paragliding"/>
         <img src={moon2} className="img-fluid img-hover" alt="moonphase"/>

         </div>

         </div>
         </div>
        </div>
    );
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
             <h2 className="fav-heading">Black & White</h2>
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

export default Bw;
