import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import styled from 'styled-components';
import logo from '../../assets/logo.webp';
import './App.css';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import Contact from '../Contact/Contact.jsx';

const SIDEBAR_OPTIONS = [
  'HOME',
  'ABOUT',
  'GALLERY',
  'CONTACT',
];

class App extends React.Component {
  state = {
    currentComponent: 'HOME',
    showMobileSideBar: false,
  }

  handleSideBarOptionClick(idx) {
    this.setState({
      currentComponent: SIDEBAR_OPTIONS[idx],
      showMobileSideBar: false
    });
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

  shouldShowSideBar(isMobile) {
    if (isMobile) {
      return this.state.showMobileSideBar;
    }
    return true;
  }

  calculateSideBarWidth(isMobile) {
    if (isMobile) {
      if (this.state.showMobileSideBar) {
        return '100%';
      }
      return '0%';
    }
    return '23%';
  }

  calculateViewComponentWidth(isMobile) {
    if (isMobile) {
      if (this.state.showMobileSideBar) {
        return '0%';
      }
      return '100%';
    }
    return '77%';
  }

  render(){
    const { showMobileSideBar } = this.state;
    const isMobile = window.innerWidth <= 600 ? true : false;
    const showSideBar = this.shouldShowSideBar(isMobile);
    const sideBarWidth = this.calculateSideBarWidth(isMobile);
    const viewComponentWidth = this.calculateViewComponentWidth(isMobile);

    return(
      <div>
      <SimpleReactLightbox>
      {isMobile &&
        (showMobileSideBar ?
          <div className="close-Img" onClick={() => this.setState({ showMobileSideBar: !showMobileSideBar })}>x</div>
          : <div className="hamburger-Img" onClick={() => this.setState({ showMobileSideBar: !showMobileSideBar })}></div>
        )
      }

      <SideBar
        sideBarWidth={sideBarWidth}
        showSideBar={showSideBar}
      >
      <header>
      <img className="logo" src={logo} height="55px" alt="logo"/>
      <a><h1>Faviola Caballero<br/><span>Fabstargraphy</span></h1></a>
      </header>
      <ul className="side-menu">
        <li><a onClick={() => this.handleSideBarOptionClick(0)} href="#Home">Home</a></li>
        <li><a onClick={() => this.handleSideBarOptionClick(1)} href="#About">About</a></li>
        <li><a onClick={() => this.handleSideBarOptionClick(2)} href="#Gallery">Gallery</a></li>
        <li><a onClick={() => this.handleSideBarOptionClick(3)} href="#Contact">Contact</a></li>
      </ul>


      <footer>
      <ul>
      <li><a href="https://www.instagram.com/fabstar_94/" target="blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li><a href="https://github.com/FABSTAR94" target="blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
      </ul>
      <small>ⓒ2020 Fabstargraphy</small>
      </footer>
      </SideBar>

      {!showMobileSideBar &&
        <ViewComponent
          isMobile={isMobile}
          viewComponentWidth={viewComponentWidth}
         >
          {this.renderViewComponent()}
        </ViewComponent>
      }
       </SimpleReactLightbox>
       </div>
  )
}
}

export default App;

const ViewComponent = styled.div`
  width: ${props => props.viewComponentWidth};
  float: ${props => props.isMobile ? '' : 'right'};
`;

const SideBar = styled.div`
  padding: 30px;
  width: ${props => props.sideBarWidth};
  visibility: ${props => props.showSideBar ? 'visible' : 'hidden'};
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: inherit;
  background: #000000;
  transition-timing-function: ease-in;
  transition: width 0.2s;
`;
