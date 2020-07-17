import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import trees from '../../../assets/trees.webp';
import rocks from '../../../assets/rocks.png';
import road from '../../../assets/road.png';
import ducks from '../../../assets/ducks.png';
import dryplant from '../../../assets/dryplant.png';
import gt from '../../../assets/gt.png';
import greenpath from '../../../assets/greenpath.webp';
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
import fairycave from '../../../assets/fairycave.webp';
import feelingblue from '../../../assets/feelingblue.webp';

class Nature extends React.Component{
  renderImages(){
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">
         <div className="gallery-column">
           <img src={road} className="img-fluid img-hover" alt="Road"/>
           <img src={square} className="img-fluid img-hover" alt="Square Path"/>
           <img src={greenblue} className="img-fluid img-hover" alt="Green Blue"/>
           <img src={trees} className="img-fluid img-hover" alt="Blurry Road in Autumn"/>
           <img src={feelingblue} className="img-fluid img-hover" alt="Looking at the mountains feeling blue"/>
           <img src={gardwater} className="img-fluid img-hover" alt="Garden waterfall"/>
           <img src={dragonfly} className="img-fluid img-hover" alt="Dragonfly"/>
         </div>
         <div className="gallery-column">
         <img src={greenpath} className="img-fluid img-hover" alt="green path "/>
          <img src={dryplant} className="img-fluid img-hover" alt="dry plants"/>
          <img src={gt} className="img-fluid img-hover" alt="gt"/>
          <img src={pb} className="img-fluid img-hover" alt="pb"/>
          <img src={ducks} className="img-fluid img-hover" alt="ducks"/>
        </div>
        <div className="gallery-column">
          <img src={fairycave} className="img-fluid img-hover" alt="Life is a Fairytale"/>
          <img src={broken} className="img-fluid img-hover" alt="Split log"/>
          <img src={enchanted} className="img-fluid img-hover" alt="Enchanted Forest"/>
          <img src={steps} className="img-fluid img-hover" alt="Steps"/>
          <img src={log} className="img-fluid img-hover" alt="Log"/>
          <img src={cows} className="img-fluid img-hover" alt="Cow drinking water stare"/>
          <img src={rocks} className="img-fluid img-hover" alt="Jumbo Rocks"/>
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
