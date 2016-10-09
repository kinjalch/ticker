import React from 'react';
import AppBar from 'material-ui/AppBar';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FaceIcon from 'material-ui/svg-icons/action/face';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearEvents, signout } from '../actions/index';
import { browserHistory } from 'react-router';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.routeToBuyerSearch = this.routeToBuyerSearch.bind(this);
    this.routeToSellerSearch = this.routeToSellerSearch.bind(this);
  }

  openMenu(event) {
    this.setState({ menuOpen: true });
  }

  closeMenu(event) {
    this.setState({ menuOpen: false });
  }

  routeToBuyerSearch(event) {
    this.props.clearEvents();
    browserHistory.push('/');
  }

  routeToSellerSearch(event) {
    this.props.clearEvents();
    browserHistory.push('/sell');
  }

  routeToAuth(event) {
    browserHistory.push('/signin');
  }

  routeToUserProfile(event) {
    browserHistory.push('/account');
  }

  signOut(event) {
    this.props.signout();
    this.routeToAuth();
  }

  renderRightElement() {
    if (localStorage.getItem('token')) {
      return (
        <IconMenu
          iconButtonElement={
            <IconButton><FaceIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem
            primaryText="My Account"
            onTouchTap={this.routeToUserProfile}
          />
          <MenuItem
            primaryText="Sign Out"
            onTouchTap={(event) => {
              this.signOut();
            }}
          />
        </IconMenu>
      );
    }

    return (
      <FlatButton
        label="Sign In"
        onClick={this.routeToAuth}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <img className="logo" src="tickerLogo.png" />
          <ul className="links">
            <li><a onClick={browserHistory.push('/search')}>Buy</a></li>
            <li onClick={browserHistory.push('/sell')}>Sell</li>
            <li onClick={this.state.menuOpen}>Watch</li>
            <li onClick={browserHistory.push('/signin')}>Sign-in</li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearEvents, signout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
