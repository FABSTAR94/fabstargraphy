import React from 'react';
import './Home.css';
import { SRLWrapper } from 'simple-react-lightbox';
import Footer from '../App/Footer.jsx';
import signature from '../../assets/signature.png';
import meditate from '../../assets/meditate.png';
import gt from '../../assets/gt.png';
import purp from '../../assets/purp.png';
import lone from '../../assets/lone.png';
import moonscene from '../../assets/moonscene.png';
import nillaselfie from '../../assets/nillaselfie.png';
import converse from '../../assets/converse.png';
import boots from '../../assets/boots.png';
import ybw from '../../assets/ybw.png';
import boat from '../../assets/boat.png';
import greenpath from '../../assets/greenpath.png';
import moon1 from '../../assets/moon1.png';
import greenblue from '../../assets/greenblue.png';
import steps from '../../assets/steps.png';
import northernlights from '../../assets/northernlights.png';

class Home extends React.Component {
  //if u want to add slider this is the js for it.
  // componentDidMount() {
  //   this.initComparisons();
  // }

  // initComparisons() {
  //   var x, i;
  //   /* Find all elements with an "overlay" class: */
  //   x = document.getElementsByClassName("img-comp-overlay");
  //   for (i = 0; i < x.length; i++) {
  //     /* Once for each "overlay" element:
  //     pass the "overlay" element as a parameter when executing the compareImages function: */
  //     compareImages(x[i]);
  //   }

  //   function compareImages(img) {
  //     var slider, img, clicked = 0, w, h;
  //     /* Get the width and height of the img element */

  //     w = img.offsetWidth;
  //     h = img.offsetHeight;

  //     console.log("OFFSETWIDTH: ", img);
  //     console.log("OFFSETHEIGHT: ", h);
  //     /* Set the width of the img element to 50%: */
  //     img.style.width = (w / 2) + "px";
  //     /* Create slider: */
  //     slider = document.createElement("DIV");
  //     slider.setAttribute("class", "img-comp-slider");
  //     /* Insert slider */
  //     img.parentElement.insertBefore(slider, img);
  //     /* Position the slider in the middle: */
  //     slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
  //     slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
  //     /* Execute a function when the mouse button is pressed: */
  //     slider.addEventListener("mousedown", slideReady);
  //     /* And another function when the mouse button is released: */
  //     window.addEventListener("mouseup", slideFinish);
  //     /* Or touched (for touch screens: */
  //     slider.addEventListener("touchstart", slideReady);
  //      /* And released (for touch screens: */
  //     window.addEventListener("touchstop", slideFinish);

  //     function slideReady(e) {
  //       /* Prevent any other actions that may occur when moving over the image: */
  //       e.preventDefault();
  //       /* The slider is now clicked and ready to move: */
  //       clicked = 1;
  //       /* Execute a function when the slider is moved: */
  //       window.addEventListener("mousemove", slideMove);
  //       window.addEventListener("touchmove", slideMove);
  //     }

  //     function slideFinish() {
  //       /* The slider is no longer clicked: */
  //       clicked = 0;
  //     }

  //     function slideMove(e) {
  //       var pos;
  //       /* If the slider is no longer clicked, exit this function: */
  //       if (clicked == 0) return false;
  //       /* Get the cursor's x position: */
  //       pos = getCursorPos(e)
  //       /* Prevent the slider from being positioned outside the image: */
  //       if (pos < 0) pos = 0;
  //       if (pos > w) pos = w;
  //       /* Execute a function that will resize the overlay image according to the cursor: */
  //       slide(pos);
  //     }

  //     function getCursorPos(e) {
  //       var a, x = 0;
  //       e = e || window.event;
  //       /* Get the x positions of the image: */
  //       a = img.getBoundingClientRect();
  //       /* Calculate the cursor's x coordinate, relative to the image: */
  //       x = e.pageX - a.left;
  //       /* Consider any page scrolling: */
  //       x = x - window.pageXOffset;
  //       return x;
  //     }

  //     function slide(x) {
  //       /* Resize the image: */
  //       img.style.width = x + "px";
  //       /* Position the slider: */
  //       slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
  //     }
  //   }
  // }
  // constructor(props){
  //   super(props);

  //   this.state = { popupPicture: undefined };

  //   // this.handlePictureClick = this.handlePictureClick.bind(this)
  // }

  //  handlePictureClick(picture){
  //   this.setState({
  //     popupPicture: picture
  //   });
  //  }
  renderImages() {
    return(
      <div className="fav-gallery">
        <div className="container-fluid">
         <div className="gallery-row">
         <div className="gallery-column">
         <img src={ybw} className="img-fluid img-hover" alt=""/>
         <img src={boat} className="img-fluid img-hover" alt=""/>
         <img src={moon1} className="img-fluid img-hover" alt=""/>
         <img src={greenblue} className="img-fluid img-hover" alt=""/>
         <img src={moonscene} className="img-fluid img-hover" alt=""/>
         <img src={meditate} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="gallery-column">
         <img src={purp} className="img-fluid img-hover" alt=""/>
         <img src={lone} className="img-fluid img-hover" alt=""/>
         <img src={gt} className="img-fluid img-hover" alt=""/>
         <img src={nillaselfie} className="img-fluid img-hover" alt=""/>
         <img src={northernlights} className="img-fluid img-hover" alt=""/>
         </div>
         <div className="gallery-column">
         <img src={converse} className="img-fluid img-hover" alt=""/>
         <img src={boots} className="img-fluid img-hover" alt=""/>
         <img src={greenpath} className="img-fluid img-hover" alt=""/>
         <img src={steps} className="img-fluid img-hover" alt=""/>
         </div>
         </div>
         </div>
        </div>
    )
  }

  render(){
    const isMobile = window.innerWidth <= 425 ? true : false;
    return(
      <div>
        <div className="fab-home">
          <div className="fav-banner">
            <div className="banner-text">
             <h1>Faviola Caballero</h1>
             <span>Fabstargraphy</span>
            </div>
          </div>
        </div>

        <div className="fav-qoute">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
               <p className="qoute">This is going to be a qoute I make.Mei ne equidem epicurei. Cu doctus sapientem
                 vix, duo ei augue graece numquam, has ornatus incorrupte
                 no. Case evertitur ex mea. At movet cotidieque vim, ex
                 lorem nonumy facilisis cum. Ei novum errem exerci pro.
                 Ex decore reformidans mei, at nam error oblique. Enim
                 invenire prodesset nec an, dicant scripta sea ea. Ne nam
                 quas posse postulant, facete sanctus luptatum in mel.
               </p>
               <img className="signature" src={signature} alt="Faviola signature"/>
              </div>
            </div>
          </div>
        </div>
           {isMobile ?
              <div>{this.renderImages()}</div>
              : <SRLWrapper>{this.renderImages()}</SRLWrapper>}
        <Footer/>
      </div>


    )
  }
}

export default Home;
