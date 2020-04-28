import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import lone from '../../../assets/lone.png';
import girlset from '../../../assets/girlset.png';
import northernlights from '../../../assets/northernlights.png';
import love from '../../../assets/love.png';
import me from '../../../assets/me.png';

class Silhouette extends React.Component{
  renderImages() {
    return(
      <div className="fav-gallery">
          <div className="container-fluid">
            <div className="gallery-row">
              <div className="gallery-column">
                <img src={lone} className="img-fluid img-hover" alt=""/>
                <img src={northernlights} className="img-fluid img-hover" alt=""/>
              </div>
              <div className="gallery-column">
                <img src={girlset} className="img-fluid img-hover" alt=""/>
              </div>

              <div className="gallery-column">
                <img src={love} className="img-fluid img-hover" alt=""/>
                <img src={me} className="img-fluid img-hover" alt=""/>
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
             <h2 className="fav-heading">Silhouette</h2>
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

export default Silhouette;
