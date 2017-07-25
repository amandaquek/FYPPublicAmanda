import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import InformationSecurity from '../components/faculty/InformationSecurity.jsx';
import AnimationsArt from '../components/faculty/AnimationsArt.jsx';
import FinancialInformatics from '../components/faculty/FinancialInformatics.jsx';
import InformationTech from '../components/faculty/InformationTech.jsx';
import GameDesign from '../components/faculty/GameDesign.jsx';
import Footer from '../components/Footer.jsx';

export default class AllStudents extends Component{
  render() {

    return (
      <div>
          <NavigationApp />
          <br/>
          <div className="contents">
              <InformationSecurity />
              <br/>
              <AnimationsArt />
              <br/>
              <FinancialInformatics />
              <br/>
              <InformationTech />
              <br/>
              <GameDesign />
          </div>
          <br />
          <Footer />
      </div>
    );
  }
}
