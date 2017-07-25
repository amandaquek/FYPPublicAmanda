import React, { Component } from 'react';

export default class ListOfStudents extends Component{

  render(){
    return(
      <div>
        <div className="w3-cell-content">
                <div className="w3-row w3-border">
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Crystal Chiok</p>
                        <p>A short description</p>
                    </div>
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Amanda Quek</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Lau Zi Quan</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Lau Zi Quan</p>
                        <p>A short description here</p>
                    </div>

                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Crystal Chiok</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Amanda Quek</p>
                        <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container">
                        <p className="img-circle"><img src="./img/profile.jpg" alt="poster" className="image" /></p>
                        <p className="projHead">Lau Zi Quan</p>
                        <p>A short description here</p>
                    </div>
                </div>
          </div>

          <div className="clearfix"></div>
        </div>
            );
  }
}
