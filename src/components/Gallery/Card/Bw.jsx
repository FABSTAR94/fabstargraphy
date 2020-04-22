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
import lux from '../../../assets/lux.png';
import boots from '../../../assets/boots.png';
import head from '../../../assets/head.png';

class Bw extends React.Component {
  render(){
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Gallery</span>
             <h2 className="fav-heading">Black & White</h2>
           </div>
            <SRLWrapper>
        <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">

         <div className="gallery-column">
         <img src={boots} className="img-fluid img-hover" alt=""/>
         <img src={lux} className="img-fluid img-hover" alt=""/>
         <img src={ridinghood} className="img-fluid img-hover" alt=""/>
         <img src={red} className="img-fluid img-hover" alt=""/>

         </div>

         <div className="gallery-column">
         <img src={purp} className="img-fluid img-hover" alt=""/>
         <img src={palmtrees} className="img-fluid img-hover" alt=""/>
         </div>

         <div className="gallery-column">
         <img src={converse} className="img-fluid img-hover" alt=""/>
         <img src={hunter} className="img-fluid img-hover" alt=""/>
         <img src={fairy} className="img-fluid img-hover" alt=""/>
         <img src={head} className="img-fluid img-hover" alt=""/>
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

export default Bw;
