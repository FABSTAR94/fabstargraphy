import React from 'react';
import './Contact.css';
import Footer from '../App/Footer.jsx';
import styled from 'styled-components';

// email from https://postmail.invotes.com
const FormId = "javascript_form";

const dataJs = {
    "access_token": "ascr3zhe35gpx88jvptujf42"
};

class Contact extends React.Component{

  state = {
    name: '',
    email: '',
    message: '',
    errorInput: {
      errorNameText: '',
      errorEmailText: '',
      errorMessageText: '',
    }
  }

  js_onSuccess() {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";

    const successPopUp = document.getElementById('success-pop-up');
    successPopUp.style["visibility"] = "visible";
    setTimeout(() => {
        successPopUp.style["visibility"] = "hidden";
    }, 5000);
}

  js_onError(error) {
    // remove this to avoid redirect

    const errorPopUp = document.getElementById('error-pop-up');
    errorPopUp.style["visibility"] = "visible";
    setTimeout(() => {
        errorPopUp.style["visibility"] = "hidden";
    }, 5000);
}

  validation() {
    const { name, email, message, errorInput } = this.state;

    const updatedErrorInput = Object.assign({}, errorInput);

    if ( message === '') {
      updatedErrorInput.errorMessageText = 'Please provide a message';
    } else {
      updatedErrorInput.errorMessageText = '';
    }

    if ( name === '') {
      updatedErrorInput.errorNameText = 'Please provide your name';
    } else {
      updatedErrorInput.errorNameText = '';
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      updatedErrorInput.errorEmailText = '';
    } else {
      updatedErrorInput.errorEmailText = 'Please provide a valid email';
    }

    this.setState({ errorInput: updatedErrorInput });

    if (updatedErrorInput.errorNameText !== '' ||
        updatedErrorInput.errorEmailText !== '' ||
        updatedErrorInput.errorMessageText !== '')
    {
      return false;
    }
    return true;
  }

  sendForm(event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const { name, email, message } = this.state;
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            this.js_onSuccess();
            this.setState({
              name: '',
              email: '',
              message: '',
            });
        } else if (request.readyState == 4) {
            this.js_onError(request.response);
        }
    };

    const subject = "Faviola, You have a new client interested!";

    if (!this.validation()) {
        console.log("invalid info");
        return false;
    } else {
        const messageToSend = `This is my information below. \n Name: ${name} \n Email: ${email} \n Message: ${message}`;
        console.log(messageToSend);
        dataJs['subject'] = subject;
        dataJs['text'] = messageToSend;
        const params = this.toParams(dataJs);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);
    }
}

toParams(dataJs) {
    const form_data = [];
    for (const key in dataJs) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(dataJs[key]));
    }

    return form_data.join("&");
}

  render(){
    const { errorInput } = this.state;
    return(
      <div className="fav-contact">
        <div className="container-fluid">
          <div className="row">
           <div className="col-md-12 text-center">
             <span>Let's Chat</span>
             <h2 className="fav-heading">Contact Me</h2>
           </div>
          </div>
            <div className="row">
         {/*   <div className="col-md-12">
              <img src={telephone} className="img-fluid phone"alt="Faviola"/>
            </div>*/}
          </div>
          <div className="row">
            <div className="col-md-6 mb-30">
              <h3 className="contact-heading">Contact Info</h3>
              <p className="contact-par">I created this website to display my images.
              <br/> I am using this website as a project for Web Development.
              </p>
              <p className="phone-link contact-par"><b>Phone:</b><a href="tel:+16502085816"> +1 650-208-5816</a></p>
              <p className="contact-par"><b>Email:</b> faviola.caballerog@gmail.com</p>
              <p className="contact-par"><b>Location:</b> San Francisco Bay Area, CA</p>
            </div>
              <div className="col-md-6 mb-30">
                <h3 className="contact-heading">Contact Form</h3>
                <p className="contact-par">Interested in working with me?</p>
                <form className="row">
                <div className="col-sm-6">
                <ErrorText>{errorInput.errorNameText}</ErrorText>
                <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="inputName"
                  onChange={({ target: { value } }) => {
                    this.setState({ name: value });
                  }}
                  value={this.state.name} required/>
                </div>
                </div>

                <div className="col-sm-6">
                <ErrorText>{errorInput.errorEmailText}</ErrorText>
                <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="inputEmail"
                  onChange={({ target: { value } }) => {
                    this.setState({ email: value });
                  }}
                  value={this.state.email} required/>
                </div>
                </div>

                <div className="col-md-12">
                <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                  id="inputMessage"
                  onChange={({ target: { value } }) => {
                    this.setState({ message: value });
                  }}
                  value={this.state.message}>
                </textarea>
                {errorInput.errorMessageText !== '' &&
                <ErrorText>{errorInput.errorMessageText}</ErrorText>}
                  </div>
                </div>


                <div className="col-md-12">
                <div className="form-group">
                <input
                  onClick={(e) => this.sendForm(e)}
                  type="submit"
                  className="btn btn-contact"
                  value="Send"
                  className="form-control"/>
                  </div>
                </div>
                </form>

                <div className="alert alert-warning alert-dismissible fade show m-1" id="success-pop-up" role="alert">
                    Your message has been sent.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">

                    </button>
                </div>
                <div className="alert alert-warning alert-dismissible fade show m-1" id="error-pop-up" role="alert">
                    ERROR! Not sent. Please try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">

                    </button>
                </div>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact;

const ErrorText = styled.small`
  color: red;
  font-family: sans-serif;
  margin-left: 0px;
`

