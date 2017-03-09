import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.push('/')
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const userNav = (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Food4Fuel</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="loggedin-as">You are logged in as: {user.first_name} {user.last_name}</li>
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
          </ul>
          <div className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    );

    const guestNav = (
      <nav id="landingNav" className="navbar navbar-fixed-top">
        <div className="user-account">
          <Link className="page-scroll" to="/signup">Sign up</Link>
          <Link className="page-scroll" to="/login">Login</Link>
        </div>
      </nav>
    );

    return (
      <div>
      { isAuthenticated ? userNav : guestNav }
      </div>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
