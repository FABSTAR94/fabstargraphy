import React from 'react';
import './Home.css';
import { SRLWrapper } from 'simple-react-lightbox';
import Footer from '../App/Footer.jsx';
import signature from '../../assets/signature.webp';
import meditate from '../../assets/meditate.webp';
import gt from '../../assets/gt.webp';
import purp from '../../assets/purp.webp';
import lone from '../../assets/lone.webp';
import moonscene from '../../assets/moonscene.webp';
import nillaselfie from '../../assets/nillaselfie.webp';
import converse from '../../assets/converse.webp';
import boots from '../../assets/boots.webp';
import ybw from '../../assets/ybw.webp';
import boat from '../../assets/boat.webp';
import moon1 from '../../assets/moon1.webp';
import greenblue from '../../assets/greenblue.webp';
import steps from '../../assets/steps.webp';
import northernlights from '../../assets/northernlights.webp';
import waterfall from '../../assets/waterfall.webp';
import umbrellas from '../../assets/umbrellas.webp';
import hpbuilding from '../../assets/hpbuilding.webp';
import elateneo from '../../assets/elateneo.webp';
import blackbackground from '../../assets/blackbackground.webp';

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
         <img src={ybw} className="img-fluid img-hover" alt="yellow blue sunset"/>
         <img src={boat} className="img-fluid img-hover" alt="boat view"/>
         <img src={waterfall} className="img-fluid img-hover" alt="waterfall with rainbow"/>
         <img src={moon1} className="img-fluid img-hover" alt="moon"/>
         <img src={elateneo} className="img-fluid img-hover" alt="el ateneo"/>
         <img src={greenblue} className="img-fluid img-hover" alt="green blue"/>
         <img src={moonscene} className="img-fluid img-hover" alt="moon scene"/>
         <img src={meditate} className="img-fluid img-hover" alt="meditate"/>
         </div>
         <div className="gallery-column">
         <img src={purp} className="img-fluid img-hover" alt="purple"/>
         <img src={lone} className="img-fluid img-hover" alt="alone"/>
         <img src={hpbuilding} className="img-fluid img-hover" alt="hpbuilding"/>
         <img src={nillaselfie} className="img-fluid img-hover" alt="dog selfie"/>
         <img src={gt} className="img-fluid img-hover" alt="gt"/>
         <img src={northernlights} className="img-fluid img-hover" alt="boys in northernlights"/>
         </div>
         <div className="gallery-column">
         <img src={converse} className="img-fluid img-hover" alt="converse"/>
         <img src={boots} className="img-fluid img-hover" alt="boots"/>
         <img src={umbrellas} className="img-fluid img-hover" alt="colorful umbrellas"/>
         <img src={blackbackground} className="img-fluid img-hover" alt="black background"/>
         <img src={steps} className="img-fluid img-hover" alt="steps"/>
         </div>
         </div>
         </div>
        </div>
    )
  }

  render(){
    const isMobile = window.innerWidth <= 600 ? true : false;
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
               <p className="qoute">"
               You can't go back in time to relive a moment, but you can
               capture that moment. And with that moment...you become the creator of your own world."
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
