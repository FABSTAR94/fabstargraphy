import React from 'react';
import './Sky.css';
import { SRLWrapper } from 'simple-react-lightbox';
import cloudy from '../../../assets/cloudy.png';
import island from '../../../assets/island.png';
import moon from '../../../assets/moon.png';
import mountains from '../../../assets/mountains.png';
import purple from '../../../assets/purple.png';
import starry from '../../../assets/starry.png';
import water from '../../../assets/water.png';

class Sky extends React.Component{
  render(){
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Gallery</span>
             <h2 className="fav-heading">Sky</h2>
           </div>
            <SRLWrapper>
        <div className="fav-gallery">
        <div className="container-fluid">
         <div className="row">
         <div className="col-4 col-md-4 col-lg-4">
         <img src={island} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="col-4 col-md-4 col-lg-4">
         <img src={starry} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="col-4 col-md-4 col-lg-4">
         <img src={island} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="col-4 col-md-4 col-lg-4">
         <img src={purple} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="col-4 col-md-4 col-lg-4">
         <img src={starry} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="col-4 col-md-4 col-lg-4">
         <img src={purple} className="img-fluid img-hover" alt=""/>
         </div>
         </div>
         </div>
        </div>
        </SRLWrapper>

        <button onClick={backAction}>Back</button>
          </div>
          </div>
          </div>
    )
  }
}

export default Sky;
