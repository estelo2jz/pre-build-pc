import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import './styles/tc.scss';

export default class TC extends Component {
  render() {
    return (
      <div className="tc__outer-container">
        <div className="tc__outer-inner">Currently Buiilding This Page.</div>
      </div>
    )
  }
}