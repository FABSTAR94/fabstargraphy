import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import trees from '../../../assets/trees.png';
import rocks from '../../../assets/rocks.png';
import road from '../../../assets/road.png';
import ducks from '../../../assets/ducks.png';
import dryplant from '../../../assets/dryplant.png';
import gt from '../../../assets/gt.png';
import greenpath from '../../../assets/greenpath.png';
import square from '../../../assets/square.png';
import broken from '../../../assets/broken.png';
import log from '../../../assets/log.png';
import greenblue from '../../../assets/greenblue.png';
import gardwater from '../../../assets/gardwater.png';
import steps from '../../../assets/steps.png';
import enchanted from '../../../assets/enchanted.jpeg';
import pb from '../../../assets/pb.jpeg';
import dragonfly from '../../../assets/dragonfly.jpeg';
import cows from '../../../assets/cows.jpeg';

class Nature extends React.Component{
  renderImages(){
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">
         <div className="gallery-column">
           <img src={road} className="img-fluid img-hover" alt="road"/>
           <img src={square} className="img-fluid img-hover" alt="squares"/>
           <img src={greenblue} className="img-fluid img-hover" alt="green blue water"/>
           <img src={trees} className="img-fluid img-hover" alt="trees"/>
           <img src={gardwater} className="img-fluid img-hover" alt="garden waterfall"/>
           <img src={dragonfly} className="img-fluid img-hover" alt="dragonfly"/>
         </div>
         <div className="gallery-column">
         <img src={greenpath} className="img-fluid img-hover" alt="green path "/>
          <img src={dryplant} className="img-fluid img-hover" alt="dry plants"/>
          <img src={gt} className="img-fluid img-hover" alt="gt"/>
          <img src={pb} className="img-fluid img-hover" alt="pb"/>
          <img src={ducks} className="img-fluid img-hover" alt="ducks"/>
        </div>
        <div className="gallery-column">
          <img src={broken} className="img-fluid img-hover" alt="broken"/>
          <img src={enchanted} className="img-fluid img-hover" alt="enchanted forest"/>
          <img src={steps} className="img-fluid img-hover" alt="steps"/>
          <img src={log} className="img-fluid img-hover" alt="log"/>
          <img src={cows} className="img-fluid img-hover" alt="cows drinking water"/>
          <img src={rocks} className="img-fluid img-hover" alt="rocks"/>
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
             <h2 className="fav-heading">Nature</h2>
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

export default Nature;
