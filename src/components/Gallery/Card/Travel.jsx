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
import lonbridge from '../../../assets/lonbridge.jpeg';
import elateneo from '../../../assets/elateneo.jpeg';
import cemetery from '../../../assets/cemetery.jpeg';
import umbrellas from '../../../assets/umbrellas.jpeg';
import motorcycle from '../../../assets/motorcycle.jpeg';
import caminito from '../../../assets/caminito.jpeg';
import versailles from '../../../assets/versailles.jpeg';

class Travel extends React.Component{
  renderImages() {
    return(
      <div className="fav-gallery">
                <div className="container-fluid">
                  <div className="gallery-row">
                    <div className="gallery-column">
                      <img src={vintageparis} className="img-fluid img-hover" alt=""/>
                      <img src={hpgarden} className="img-fluid img-hover" alt=""/>
                      <img src={umbrellas} className="img-fluid img-hover" alt=""/>
                      <img src={buildings} className="img-fluid img-hover" alt=""/>
                      <img src={elateneo} className="img-fluid img-hover" alt=""/>
                      <img src={hpbuilding} className="img-fluid img-hover" alt=""/>
                      <img src={caminito} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={oldlady} className="img-fluid img-hover" alt=""/>
                       <img src={sola} className="img-fluid img-hover" alt=""/>
                      <img src={toplonbridge} className="img-fluid img-hover" alt=""/>
                      <img src={motorcycle} className="img-fluid img-hover" alt=""/>
                      <img src={eiffeltower} className="img-fluid img-hover" alt=""/>
                      <img src={versailles} className="img-fluid img-hover" alt=""/>
                    </div>
                     <div className="gallery-column">
                      <img src={boys} className="img-fluid img-hover" alt=""/>
                      <img src={cemetery} className="img-fluid img-hover" alt=""/>
                      <img src={blackbackground} className="img-fluid img-hover" alt=""/>
                      <img src={lonbridge} className="img-fluid img-hover" alt=""/>
                      <img src={painting} className="img-fluid img-hover" alt=""/>
                    </div>
                  </div>
                </div>
               </div>
    )
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
