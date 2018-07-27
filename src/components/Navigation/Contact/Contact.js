import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link';
import s from './Contact.css';

class Contact extends Component {
  render() {
    return (
      <Link className={s.link} to="/contact">
        Contact
      </Link>
    );
  }
}

export default withStyles(s)(Contact);
