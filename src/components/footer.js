import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import LinkToButton from './LinkToButton.js'
// import indexRoutes from '../routes/index.js'
import Homepage from '../views/homepage.jsx'

class Footer extends Component {

    render() {
      return (
      
        <ul>
            {/* link to */}
           <li>Home</li>
           <li>Textbook(GitHub)</li>
           <li>Ada Website</li>
           <li>Blog</li>
        </ul>
      );
    }
  }
export default Footer;