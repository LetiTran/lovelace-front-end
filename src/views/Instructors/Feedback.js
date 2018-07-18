import React, { Component } from 'react';
import MarkdownFeedback from "../../components/MarkdownFeedback";
// import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    return (
        <section>
           <MarkdownFeedback />
         </section>
    );
  }
}

export default Feedback;