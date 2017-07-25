import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ViewStudent from '../pages/ViewStudent.jsx';
import AllStudents from '../pages/AllStudents.jsx';
import AllProjects from '../pages/AllProjects.jsx';
import AllFaculty from '../pages/AllFaculty.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
      <Router history={browserHistory}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About} />
              <Route exact path="/ViewStudent" component={ViewStudent}/>
              <Route exact path="/AllStudents" component={AllStudents}/>
              <Route exact path="/AllProjects" component={AllProjects}/>
              <Route exact path="/AllFaculty" component={AllFaculty}/>
    		</Switch>
  	  </Router>
);
