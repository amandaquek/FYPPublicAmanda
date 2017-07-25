import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

export default class Slideshow extends Component{

  render() {
    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Students</h1>

                {/*<div className="w3-container">
                    <h2>Mobile First Responsiveness</h2>
                    <p className="w3-large">Try to resize the window!</p>
                </div>*/}

                <div className="w3-row w3-border outer-div">
                    <div className="w3-quarter w3-container inner-div">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Crystal Chiok</p>
                        <p>A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Amanda Quek</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Lau Zi Quan</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Lee Boon Sing</p>
                        <p>A short description here</p>
                    </div>
                  </div>

              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="#">View all students >></a></p>
          </div>
      </div>
    );
  }
}
