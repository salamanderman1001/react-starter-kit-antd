import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link';
import s from './About.css';

class About extends React.Component {
  render() {
    return (
      <Link className={s.link} to="/about">
        About
      </Link>
    );
  }
}

export default withStyles(s)(About);
