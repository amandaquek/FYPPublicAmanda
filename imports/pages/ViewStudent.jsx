import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import Footer from '../components/Footer.jsx';

export default class ViewStudent extends Component{

  render() {
    var profileImg = './img/profile.jpg';
    var profileImg1 = './img/Project1.jpg';

    return (
      <div>

		<NavigationApp />
		<br/>
        <div id="wrap">
            <p className="img-circle"><img src={profileImg} alt="poster" className="image" /></p>
        </div>

        <div id="wrap">
            <div id="header">
                <h1 className="mainHeader">About me</h1>
                <p className="indiStudent">Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description Short description</p>
            </div>
        </div>

        <div id="wrap">
            <div id="header">
                <h1 className="mainHeader">Details</h1>
                <p className="indiStudent">Crystal Chiok
                <br/>
                System Analyst
                <br/>
                crystal.chiok.2015@rp.edu.sg</p>
                <div className="footer-logo">
                    <div className="social">
                    	<a href="https://www.facebook.com/" className="facebook"><svg viewBox="0 0 33 33"><g><path d="M 17.996,32L 12,32 L 12,16 l-4,0 l0-5.514 l 4-0.002l-0.006-3.248C 11.993,2.737, 13.213,0, 18.512,0l 4.412,0 l0,5.515 l-2.757,0 c-2.063,0-2.163,0.77-2.163,2.209l-0.008,2.76l 4.959,0 l-0.585,5.514L 18,16L 17.996,32z"></path></g></svg>
                        </a>
                        <a href="https://twitter.com/" className="twitter"><svg viewBox="0 0 33 33"><g><path d="M 32,6.076c-1.177,0.522-2.443,0.875-3.771,1.034c 1.355-0.813, 2.396-2.099, 2.887-3.632 c-1.269,0.752-2.674,1.299-4.169,1.593c-1.198-1.276-2.904-2.073-4.792-2.073c-3.626,0-6.565,2.939-6.565,6.565 c0,0.515, 0.058,1.016, 0.17,1.496c-5.456-0.274-10.294-2.888-13.532-6.86c-0.565,0.97-0.889,2.097-0.889,3.301 c0,2.278, 1.159,4.287, 2.921,5.465c-1.076-0.034-2.088-0.329-2.974-0.821c-0.001,0.027-0.001,0.055-0.001,0.083 c0,3.181, 2.263,5.834, 5.266,6.438c-0.551,0.15-1.131,0.23-1.73,0.23c-0.423,0-0.834-0.041-1.235-0.118 c 0.836,2.608, 3.26,4.506, 6.133,4.559c-2.247,1.761-5.078,2.81-8.154,2.81c-0.53,0-1.052-0.031-1.566-0.092 c 2.905,1.863, 6.356,2.95, 10.064,2.95c 12.076,0, 18.679-10.004, 18.679-18.68c0-0.285-0.006-0.568-0.019-0.849 C 30.007,8.548, 31.12,7.392, 32,6.076z"></path></g></svg></a>
                        <a href="https://www.linkedin.com/" className="linkedin"><svg viewBox="0 0 512 512"><g><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path></g></svg></a>
                	</div>
                </div>
            </div>
        </div>

        <div id="wrap">
            <div id="header">
                <h1 className="mainHeader">Projects</h1>

                <div className="w3-container">
                    {/*<h2>Mobile First Responsiveness</h2>
                    <p className="w3-large">Try to resize the window!</p>
                    http://54.191.109.239/FYPXpal/AmandaInfo*/}
                </div>

                <div className="w3-row w3-border">
                    <div className="w3-quarter w3-container">
                        <p><img src={profileImg1} alt="poster" className="image" /></p>
                        <p className="projHead">Underneath</p>
                        <p>A short description here</p>
                        <p className="viewProj"><button>View Project</button></p>
                    </div>
                    <div className="w3-quarter w3-container">
						            <p><img src={profileImg1} alt="poster" className="image" /></p>
                        <p className="projHead">Underneath</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
					              <p><img src={profileImg1} alt="poster" className="image" /></p>
                        <p className="projHead">Underneath</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
					              <p><img src={profileImg1} alt="poster" className="image" /></p>
                        <p className="projHead">Underneath</p>
                        <p>A short description here</p>
                    </div>
                </div>

                {/*This is to ensure that the div height covers all content*/}
                <div className="clearfix"></div>
            </div>
			<br/>
			<Footer />
        </div>

      </div>
    );
  }
}