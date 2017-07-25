import React, { Component } from 'react';

export default class InformationSecurity extends Component{

  render(){
    return(
      <div id="wrap">
				<div id="header">
					<div className="w3-row w3-border">
                        <div className="w3-quarter w3-container">
                            <p><img src="./img/Project1.jpg" alt="poster" className="image" /></p>
                            <p className="projHead">Underneath</p>
                            <p>A short description here</p>
                            <p className="viewProj"><button>View Project</button></p>
                        </div>
                        <div className="w3-quarter w3-container">
                            <p><img src="./img/Project1.jpg" alt="poster" className="image" /></p>
                            <p className="projHead">Underneath</p>
                            <p>A short description here</p>
                        </div>
                        <div className="w3-quarter w3-container">
                            <p><img src="./img/Project1.jpg" alt="poster" className="image" /></p>
                            <p className="projHead">Underneath</p>
                            <p>A short description here</p>
                        </div>
                        <div className="w3-container">
                            <h1 className="mainHeader">Diploma in Information Security &amp; Forensics</h1>
                            <p className="mainLink floatBottom"><button className="studentButton">View all students</button></p>
                        </div>
                    </div>

                    {/*This is to ensure that the div height covers all content*/}
                    <div className="clearfix"></div>
        	</div>
          </div>
            );
  }
}
