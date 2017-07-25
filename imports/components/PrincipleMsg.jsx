import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

export default class Slideshow extends Component{

  render() {
    return (
		<div id="header">
			<h1 className="mainHeader">Principle Message</h1>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-4" id="principlePhoto"><img src="./img/MrNgPohOon.jpg" className="homeImg"/></div>
						<div className="col-xs-7">
							<blockquote>
								<p>I would like to take this opportunity to congratulate our students who take part in the inaugural World Skills 3D Digital Game Art Competition (Singapore). Joey Ng Jie Lin and Tan Siah Wei (MMA, Year 3 students), were placed 3rd and 4th position despite the strong competition from other participants. <br/>
									<br/>
									We would also like to welcome back our 69 IT/FI/ISF ICTians who have spent 3 weeks in Beijing (44) and Chongqing (25), gaining insights into the culture of China through lessons with university professors and immersion into the local lifestyle. <br/>
									<br/>
									25 ISF students went to the United States for a Masterclass with Palo Alto Networks where they were hosted by leading technology companies such as Google, Cisco Networks and Fortinet - giving them real insights into the dynamism of the IT industries. <br/>
									<br/>
									Our 25 Year 2 MMA students spent 14 days in San Francisco and Los Angeles attending Masterclasses on Gamification, introducing them to new skills and broadening their perspectives.</p>
								<p className="alignRight">-- Ng Poh Oon, Director, School of InfoComm Technology</p>
							</blockquote>
						</div>
					</div>
				</div>

			{/*This is to ensure that the div height covers all content*/}
			<div className="clearfix"></div>
		</div>
    );
  }
}
