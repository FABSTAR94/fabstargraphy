import React from 'react';
import logo from '../../assets/logo.png';
import './App.css';

class App extends React.Component {

render(){
  return(
    <div>
    <section id="sidebar">
    <header>
    <img class="logo" src={logo}/>
    <a><h1>Faviola Caballero<br/><span>Fabstargraphy</span></h1></a>
    </header>
    <ul class="side-menu">
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
     <li><a href='#'>Services</a></li>
    <li><a href='#'>Gallery</a></li>
    <li><a href='#'>Contact</a></li>
    </ul>


    <footer>
    <ul>
    <li><a href="https://www.instagram.com/fabstar_94/" target="blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/fabstar94-faviola-18fcg79341/" target="blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
    </ul>
    <small>ⓒ2020 Fabstargraphy</small>
    </footer>
    </section>
</div>


  )
}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
