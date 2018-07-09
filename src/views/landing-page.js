import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Login from "../components/login.js"
import logo from "../logo-horizontal.png"
import "../css-files/landing-page.css";

class LandingPage extends Component {
   
  render() {
    return (

      <div>
        <Login />

        <img src= {logo} alt="App Logo" height="200" width="750"/>

        <p>Staff | Teachers | Students</p>
       
      </div>
    );
  }
}

export default LandingPage;