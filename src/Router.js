import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import CreateTopic from './components/CreateTopic';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key="login" component={LoginForm}  title='Please Login' initial/>
        </Scene>
        <Scene key='main'>
          <Scene 
            onRight={() => Actions.CreateTopic()}
            rightTitle='Add'
            key="dashboard" 
            component={Dashboard}  
            title='Dashboard' initial/>
          <Scene key="CreateTopic" component={CreateTopic}  title='Add a new Topic' />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;