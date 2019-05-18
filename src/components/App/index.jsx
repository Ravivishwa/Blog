import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Header/index.js';
import { Home } from '../../components';
import  Categories from '../Categories'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (    
    <React.Fragment>  
      <Navbar/>    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </React.Fragment>

  )
}

export default withRouter(App);