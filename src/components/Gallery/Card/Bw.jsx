import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import fairy from '../../../assets/fairy.png';
import red from '../../../assets/red.png';
import hunter from '../../../assets/hunter.png';
import purp from '../../../assets/purp.png';
import ridinghood from '../../../assets/ridinghood.png';
import palmtrees from '../../../assets/palmtrees.png';
import converse from '../../../assets/converse.png';
import editlux from '../../../assets/editlux.png';
import boots from '../../../assets/boots.png';
import head from '../../../assets/head.png';
import fly from '../../../assets/fly.png';
import moon1 from '../../../assets/moon1.png';
import moon2 from '../../../assets/moon2.png';
import fullmoon from '../../../assets/fullmoon.png';
import undermoon from '../../../assets/undermoon.jpg';
import walk from '../../../assets/walk.jpg';

class Bw extends React.Component {
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={boots} className="img-fluid img-hover" alt="boots"/>
         <img src={editlux} className="img-fluid img-hover" alt="Guy holding camera"/>
         <img src={fairy} className="img-fluid img-hover" alt="fairy"/>
         <img src={red} className="img-fluid img-hover" alt="red"/>
         <img src={fullmoon} className="img-fluid img-hover" alt="fullmoon"/>
         </div>

         <div className="gallery-column">
         <img src={purp} className="img-fluid img-hover" alt="purpleflower"/>
         <img src={walk} className="img-fluid img-hover" alt="Girl Walking"/>
         <img src={palmtrees} className="img-fluid img-hover" alt="palmtrees"/>
         <img src={moon1} className="img-fluid img-hover" alt="moonphase"/>
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
