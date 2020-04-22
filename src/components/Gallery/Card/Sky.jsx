import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import rainbow from '../../../assets/rainbow.png';
import moonscene from '../../../assets/moonscene.png';
import branches from '../../../assets/branches.png';
import moon1 from '../../../assets/moon1.png';
import moon2 from '../../../assets/moon2.png';
import fullmoon from '../../../assets/fullmoon.png';
import bird from '../../../assets/bird.png';
import fly from '../../../assets/fly.png';

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
                  <div className="gallery-row">
                    <div className="gallery-column">
                      <img src={rainbow} className="img-fluid img-hover" alt=""/>
                      <img src={branches} className="img-fluid img-hover" alt=""/>
                      <img src={fly} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={moon1} className="img-fluid img-hover" alt=""/>
                      <img src={moonscene} className="img-fluid img-hover" alt=""/>
                      <img src={moon2} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={fullmoon} className="img-fluid img-hover" alt=""/>
                      <img src={bird} className="img-fluid img-hover" alt=""/>
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

export default Sky;
