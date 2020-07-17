import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './Button.css';
import landset from '../../../assets/landset.png';
import ybw from '../../../assets/ybw.png';
import lake from '../../../assets/lake.png';
import blue from '../../../assets/blue.png';
import couple from '../../../assets/couple.png';
import boat from '../../../assets/boat.png';
import mtns from '../../../assets/mtns.png';
import meditate from '../../../assets/meditate.png';
import fannette from '../../../assets/fannette.png';
import snowmtns from '../../../assets/snowmtns.png';
import fall from '../../../assets/fall.png';
import yosemite1 from '../../../assets/yosemite1.png';
import yosemite2 from '../../../assets/yosemite2.png';
import yosemite3 from '../../../assets/yosemite3.png';
import edgeclose from '../../../assets/edgeclose.png';
import edgefar from '../../../assets/edgefar.png';
import jadecove from '../../../assets/jadecove.png';
import beachset from '../../../assets/beachset.png';
import waterfall from '../../../assets/waterfall.jpeg';
import rainbow from '../../../assets/rainbow.png';
import moonscene from '../../../assets/moonscene.png';
import branches from '../../../assets/branches.png';
import bridalfall from '../../../assets/bridalfall.jpg';

class Landscape extends React.Component{
  renderImages() {
    return (
      <div className="fav-gallery">
        <div className="container-fluid">
           <div className="gallery-row">
            <div className="gallery-column">
              <img src={ybw} className="img-fluid img-hover" alt="yellow blue view"/>
              <img src={lake} className="img-fluid img-hover" alt="lake sunset"/>
              <img src={branches} className="img-fluid img-hover" alt="branches"/>
              <img src={bridalfall} className="img-fluid img-hover" alt="bridal falls"/>
              <img src={meditate} className="img-fluid img-hover" alt="meditate"/>
              <img src={edgeclose} className="img-fluid img-hover" alt="edge"/>
              <img src={landset} className="img-fluid img-hover" alt="land"/>
              <img src={yosemite2} className="img-fluid img-hover" alt="yosemite"/>
              <img src={rainbow} className="img-fluid img-hover" alt="rainbow"/>
            </div>
            <div className="gallery-column">
              <img src={waterfall} className="img-fluid img-hover" alt="waterfall with rainbow"/>
               <img src={beachset} className="img-fluid img-hover" alt="beach sunset"/>
              <img src={yosemite3} className="img-fluid img-hover" alt="yosemite "/>
              <img src={couple} className="img-fluid img-hover" alt="couple view"/>
              <img src={fannette} className="img-fluid img-hover" alt="fannette island"/>
              <img src={blue} className="img-fluid img-hover" alt="blue"/>
            </div>
            <div className="gallery-column">
              <img src={boat} className="img-fluid img-hover" alt="boat landscape"/>
              <img src={mtns} className="img-fluid img-hover" alt="mountains"/>
              <img src={moonscene} className="img-fluid img-hover" alt="moon scene"/>
              <img src={snowmtns} className="img-fluid img-hover" alt="snow mountains"/>
              <img src={fall} className="img-fluid img-hover" alt="fall"/>
              <img src={yosemite1} className="img-fluid img-hover" alt="yosemite"/>
              <img src={jadecove} className="img-fluid img-hover" alt="jade cove"/>
              <img src={edgefar} className="img-fluid img-hover" alt="far of the edge"/>
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
             <h2 className="fav-heading">Landscape</h2>
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

export default Landscape;
