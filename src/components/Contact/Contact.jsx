import React from 'react';
import './Contact.css';
import Footer from '../App/Footer.jsx';
// import Phonebooth from '../../assets/phone_booth.png';

class Contact extends React.Component{
  render(){
    return(
      <div className="fav-contact">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Let's Chat</span>
             <h2 className="fav-heading">Contact Me</h2>
           </div>
          </div>
            {/*<div className="row">
            <div className="col-md-12">
              <img src={Phonebooth} className="img-fluid"alt="Faviola"/>
            </div>
          </div>*/}
          <div className="row">
            <div className="col-md-6 mb-30">
              <h3 className="contact-heading">Contact Info</h3>
              <p> Please do not contact me for photography sessions.
              <br/> I created this website to just display my images.
              <br/> I am using this website as a project for web development.</p>
              <p className="phone-link"><b>Phone:</b><a href="tel:+16502085816"> +1 650-208-5816</a></p>
              <p><b>Email:</b> faviola.caballerog@gmail.com</p>
            </div>
              <div className="col-md-6">
                <h3 className="contact-heading">Contact Form</h3>
                <p>Interested in working with me?</p>
                <form className="row">
                <div className="col-sm-6">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" required/>
                </div>
                </div>

                <div className="col-sm-6">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" required/>
                </div>
                </div>

                <div className="col-md-12">
                <div className="form-group">
                <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>


                <div className="col-md-12">
                <div className="form-group">
                <input type="submit" className="btn btn-contact" value="Send" className="form-control"/>
                  </div>
                </div>
                </form>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact;
