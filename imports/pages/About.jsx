import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import Request from 'react-http-request';

export default class About extends Component{
  render() {
    return (
      <Request
        url='http://54.191.109.239/FYPXpal/AmandaInfo'
        method='get'
        accept='application/json'
        /*verbose={true}*/
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}

/*ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);*/
