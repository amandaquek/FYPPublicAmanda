import React, { Component } from 'react';

export default class Filter extends Component{

  render(){
    return(
      <div className="w3.container w3-cell-filter">
        <h2 className="header2">Filter Students<i className="fa fa-angle-double-left testing"></i></h2>
        <form action="#" method="POST">
            <h3>Category</h3><hr />
            <input type="checkbox" name="academicYear" value="Year 1" />Year 1<br/>
            <input type="checkbox" name="academicYear" value="Year 2" />Year 2<br/>
            <input type="checkbox" name="academicYear" value="Year 3" />Year 3<br/>
            <input type="checkbox" name="academicYear" value="Year 4" />Year 4<br/>
        </form>
      </div>
    );
  }
}
