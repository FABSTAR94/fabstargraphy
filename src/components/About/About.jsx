import React from 'react';
import './About.css';
import flowers from '../../assets/flowers.png';
import signature from '../../assets/signature.png';
import Footer from '../App/Footer.jsx';

class About extends React.Component {
  render(){
    return(
      <div className="fav-about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
            <span>Get to know me</span>
              <h2 className="fav-heading">About Me</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <img src={flowers} className="img-fluid"alt="Faviola"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <span className="sec-header">Fabstargraphy</span>
              <section>
                <h3>Faviola Caballero</h3>
                  <p>I wasn't that girl who knew what she wanted to be at such a young age, and I envied those who did.
                  Growing up I was a very shy girl who had very poor social skills. I was also reluctant to try new things.
                  Being the introvert I was, I spent most of my time inside four walls. If I wasn't doing my homework, writing poems, or working out at home,
                  you would see me playing video games. Most people I knew found it hard to believe that someone like me enjoyed
                  gaming, but it gave me something to do.</p>
                  <p>As the years passed by, I found myself stuck on the same chapter of my story.
                  Lost, confused, and unhappy, I knew it was time for me to make a change.
                  I finally decided to step out of my comfort zone and see what was out there.
                  I began to venture out to a few cities and countries around the world. Discovering
                  new scenes I realized there's so much beauty to life than just four bedroom walls.
                  Becoming intrigued with all the peculiarity and beauty of each venture, I wanted those moments to last so I decided to capture them.
                  And that was when I became interested in photography. Having the freedom to capture anything I want and applying
                  my own creativity to make it even more beautiful.
                  </p>
                  <p>I am a self taught Photographer/Web Developer and my journey has just started.
                  I know there's alot I need to learn in which I'm willing to face those challenges.
                  </p>
                  <p>
                   For the Future- I hope to work for a tech company or my own company in which allows me
                   to continue using my creativity through both photography and web development. I would love the opportunity
                   to work remotely in order to travel more and continue capturing life's greatest moments to share them with you.
                  </p>
                  <p>
                   For the Now- I am doing photography as a hobby with my main focus in web development.
                   I am currently building websites for clients and personal use. I'm open to new opportunities to reach my goal.
                   Finding my own self and discovering more of my personal interests.
                  </p>
                  <p>I now continue to turn the page...</p>
                  <p>
                  <img className="signature" src={signature} alt="Faviola signature"/>
                  </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
