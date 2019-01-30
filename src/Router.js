import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key='root'>
        <Scene key="login" component={LoginForm}  title='Please Login'initial/>
        <Scene key="dashboard" component={Dashboard}  title='Dashboard' />
      </Scene>
    </Router>
  )
};

export default RouterComponent;