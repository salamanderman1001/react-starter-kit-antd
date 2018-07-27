/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Row, Col, Card, Input } from 'antd';
// import PropTypes from 'prop-types';
// import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import newsQuery from './news.graphql';
import s from './Home.css';

class Home extends React.Component {
  // static propTypes = {
  //   data: PropTypes.shape({
  //     loading: PropTypes.bool.isRequired,
  //     news: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         title: PropTypes.string.isRequired,
  //         link: PropTypes.string.isRequired,
  //         content: PropTypes.string,
  //       }),
  //     ),
  //   }).isRequired,
  // };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Card title="A sample using Ant Design" style={{ margin: '20px 0 ' }}>
            <Row style={{ margin: '20px 0 ' }}>
              <Col span={5}>
                <Input placeholder="Your Name" />
              </Col>
            </Row>

            <Row style={{ margin: '20px 0 ' }}>
              <Col span={5}>
                <Button type="primary">Add</Button>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
// export default compose(withStyles(s), graphql(newsQuery))(Home);
