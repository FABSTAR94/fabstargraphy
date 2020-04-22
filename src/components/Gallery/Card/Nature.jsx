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

class Nature extends React.Component{
  render(){
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Gallery</span>
             <h2 className="fav-heading">Nature</h2>
           </div>
            <SRLWrapper>
        <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">
         <div className="gallery-column">
           <img src={road} className="img-fluid img-hover" alt=""/>
           <img src={square} className="img-fluid img-hover" alt=""/>
           <img src={greenblue} className="img-fluid img-hover" alt=""/>
           <img src={trees} className="img-fluid img-hover" alt=""/>
           <img src={gardwater} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="gallery-column">
         <img src={greenpath} className="img-fluid img-hover" alt=""/>
          <img src={dryplant} className="img-fluid img-hover" alt=""/>
          <img src={gt} className="img-fluid img-hover" alt=""/>
          <img src={ducks} className="img-fluid img-hover" alt=""/>
        </div>
        <div className="gallery-column">
          <img src={broken} className="img-fluid img-hover" alt=""/>
          <img src={steps} className="img-fluid img-hover" alt=""/>
          <img src={log} className="img-fluid img-hover" alt=""/>
          <img src={rocks} className="img-fluid img-hover" alt=""/>
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

export default Nature;
