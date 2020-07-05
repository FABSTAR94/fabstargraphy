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
import toplonbridge from '../../../assets/toplonbridge.jpeg';
import painting from '../../../assets/painting.jpeg';
import boys from '../../../assets/boys.jpeg';
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
                      <img src={vintageparis} className="img-fluid img-hover" alt="sitting on steps with eiffeltower in the background"/>
                      <img src={hpgarden} className="img-fluid img-hover" alt="garden"/>
                      <img src={umbrellas} className="img-fluid img-hover" alt="colorful umbrellas"/>
                      <img src={buildings} className="img-fluid img-hover" alt="buildings"/>
                      <img src={elateneo} className="img-fluid img-hover" alt="el ateneo"/>
                      <img src={hpbuilding} className="img-fluid img-hover" alt="building"/>
                      <img src={caminito} className="img-fluid img-hover" alt="caminito"/>
                    </div>
                     <div className="gallery-column">
                      <img src={oldlady} className="img-fluid img-hover" alt="old lady"/>
                       <img src={sola} className="img-fluid img-hover" alt="alone"/>
                      <img src={toplonbridge} className="img-fluid img-hover" alt="london bridge"/>
                      <img src={motorcycle} className="img-fluid img-hover" alt="motorcycle"/>
                      <img src={eiffeltower} className="img-fluid img-hover" alt="eiffeltower"/>
                      <img src={versailles} className="img-fluid img-hover" alt="versailles"/>
                    </div>
                     <div className="gallery-column">
                      <img src={boys} className="img-fluid img-hover" alt="boys"/>
                      <img src={cemetery} className="img-fluid img-hover" alt="cemetery"/>
                      <img src={blackbackground} className="img-fluid img-hover" alt="blackbackground"/>
                      <img src={lonbridge} className="img-fluid img-hover" alt="alone underneath the bridge"/>
                      <img src={painting} className="img-fluid img-hover" alt="painting"/>
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
