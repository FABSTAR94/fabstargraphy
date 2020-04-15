import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import logo from '../../assets/logo.png';
import './App.css';
import Footer from './Footer.jsx';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import Services from '../Services/Services.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import Card from '../Gallery/Card/Card.jsx';
import Sky from '../Gallery/Card/Sky.jsx';
import Nature from '../Gallery/Card/Nature.jsx';
import Contact from '../Contact/Contact.jsx';
import island from '../../assets/island.png';

const SIDEBAR_OPTIONS = [
  'HOME',
  'ABOUT',
  'SERVICES',
  'GALLERY',
  'CONTACT',
];

class App extends React.Component {
  state = {
    currentComponent: 'HOME',
  }

  handleSideBarOptionClick(idx) {
    this.setState({ currentComponent: SIDEBAR_OPTIONS[idx] })
  }

  renderViewComponent() {
    const { currentComponent } = this.state;

    switch(currentComponent) {
      case 'HOME':
        return (
          <Home />
        );
      case 'ABOUT':
        return (
          <About />
        );
      case 'SERVICES':
        return (
          <Services />
        );
      case 'GALLERY':
        return(
          <Gallery />
        );
      case 'CONTACT':
        return(
          <Contact />
        );
      default:
        return null;
    }
  }

  render(){
    return(
      <div>
      <SimpleReactLightbox>
      <section id="sidebar">
      <header>
      <img className="logo" src={logo} height="45px"/>
      <a><h1>Faviola Caballero<br/><span>Fabstargraphy</span></h1></a>
      </header>
      <ul className="side-menu">
        <li><a onClick={() => this.handleSideBarOptionClick(0)} href="#Home">Home</a></li>
        <li><a onClick={() => this.handleSideBarOptionClick(1)} href="#About">About</a></li>
        {/*<li><a onClick={() => this.handleSideBarOptionClick(2)} href="#Services">Services</a></li>*/}
        <li><a onClick={() => this.handleSideBarOptionClick(3)} href="#Gallery">Gallery</a></li>
        <li><a onClick={() => this.handleSideBarOptionClick(4)} href="#Contact">Contact</a></li>
      </ul>


      <footer>
      <ul>
      <li><a href="https://www.instagram.com/fabstar_94/" target="blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
{/*      <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>*/}
      <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li><a href="https://github.com/FABSTAR94" target="blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
      </ul>
      <small>ⓒ2020 Fabstargraphy</small>
      </footer>
      </section>

      <div className="sections">
        {this.renderViewComponent()}
      </div>
       </SimpleReactLightbox>
       </div>
  )
}
}


export default App;
