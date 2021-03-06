import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPageMaps from './buyer/LandingPageMaps.jsx'
import { browserHistory } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('nav-bar').classList.add('nav-bar-landing');
    document.getElementById('watch-button').style.visibility = 'hidden';
  }

  componentWillUnmount() {
    document.getElementById('nav-bar').classList.remove('nav-bar-landing');
    document.getElementById('watch-button').style.visibility = 'visible';
  }

  render() {
    return (
      <div className="landing-page">

        <div className="marketing">
          <p>Selling tickets simplified</p>
          <iframe frameBorder="0"
            src="https://youtube.com/v/FuwzZDvuERc?autoplay=1&controls=0&loop=1&playlist=FuwzZDvuERc&showinfo=0&autohide=1&start=15&end=55&modestbranding=1&frameborder=0">
          </iframe>
        </div>

        <div className="intro">

          <div className="introBox">
            <img className="introImg" src="../assets/images/auction.png" />
            <p className="introText">Ticker is an ticket auction site that makes it easy to buy or sell tickets.</p>
          </div>

          <div className="introBox">
            <img className="introImg" src="../assets/images/searchList.png" />
            <p className="introText">Find cheap tickets to events in your area.</p>
          </div>

          <div className="introBox">
            <img className="introImg" src="../assets/images/cash.png" />
            <p className="introText">Sell your tickets easily using our automated auction system.</p>
          </div>

          <div className="introBox">
            <img className="introImg" src="../assets/images/paypal.png" />
            <p className="introText">Get paid hassle-free using Paypal.</p>
          </div>
        </div>

        <div className="map">
          <LandingPageMaps />
        </div>

        <div className="footer">
          <a className="about" href="/about">
            <img className="logoFooter" src="../assets/images/pivotLogo.png" />
          </a>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
