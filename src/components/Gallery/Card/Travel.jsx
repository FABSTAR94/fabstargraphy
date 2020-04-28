import React from 'react';
import './Button.css';
import { SRLWrapper } from 'simple-react-lightbox';
import oldlady from '../../../assets/oldlady.jpeg';
import eiffeltower from '../../../assets/eiffeltower.jpeg';
import vintageparis from '../../../assets/vintageparis.jpeg';
import blackbackground from '../../../assets/blackbackground.jpeg';
import hpbuilding from '../../../assets/hpbuilding.jpeg';
import buildings from '../../../assets/buildings.jpeg';
import sola from '../../../assets/sola.jpeg';
import hpgarden from '../../../assets/hpgarden.jpeg';
import hp from '../../../assets/hp.jpeg';
import toplonbridge from '../../../assets/toplonbridge.jpeg';
import painting from '../../../assets/painting.jpeg';
import telephone from '../../../assets/telephone.jpeg';
import boys from '../../../assets/boys.jpeg';
import fly from '../../../assets/fly.png';

class Travel extends React.Component{
  renderImages() {
    return(
      <div className="fav-gallery">
                <div className="container-fluid">
                  <div className="gallery-row">
                    <div className="gallery-column">
                      <img src={hpgarden} className="img-fluid img-hover" alt=""/>
                      <img src={buildings} className="img-fluid img-hover" alt=""/>
                      <img src={eiffeltower} className="img-fluid img-hover" alt=""/>
                      <img src={hp} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={oldlady} className="img-fluid img-hover" alt=""/>
                      <img src={telephone} className="img-fluid img-hover" alt=""/>
                      <img src={toplonbridge} className="img-fluid img-hover" alt=""/>
                      <img src={sola} className="img-fluid img-hover" alt=""/>
                      <img src={vintageparis} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={boys} className="img-fluid img-hover" alt=""/>
                      <img src={blackbackground} className="img-fluid img-hover" alt=""/>
                      <img src={painting} className="img-fluid img-hover" alt=""/>
                      <img src={hpbuilding} className="img-fluid img-hover" alt=""/>
                    </div>
                  </div>
                </div>
               </div>
    )
  }
  render(){
    const isMobile = window.innerWidth <= 500 ? true : false;
    const { backAction } = this.props;
    return(
      <div className="fav-selection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span>Gallery</span>
              <h2 className="fav-heading">Travel</h2>
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

export default Travel;
