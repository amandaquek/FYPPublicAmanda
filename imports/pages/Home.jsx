import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import Slider from '../components/ImageSlider.jsx';
import NavigationApp from '../components/NavigationApp.jsx';
import Slideshow from '../components/Slideshow.jsx';
import PrincipleMsg from '../components/PrincipleMsg.jsx';
import FeaturedStudents from '../components/FeaturedStudents.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends Component{
  render() {
	var profileImg = './img/profile.jpg';
	var profileImg1 = './img/Project1.jpg';

    return (
      <div>
          <NavigationApp />
          <br/>
          {/*<Slider />*/}
          <Slideshow />
          <br/>
          <PrincipleMsg />
          <br/>
          <FeaturedStudents />
          <br/>
          <FeaturedProjects />
          <br/>
          <Footer />
      </div>
    );
  }
}
