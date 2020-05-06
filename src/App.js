import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './styles/main.styles.scss';

import Header from './components/header.component';
import Navigation from './components/navigation.component';
import Notification from './components/notification.component';
import Task1 from './components/task1.component';
import Settings from './components/settings.component';




function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>

        <Route  path='/' component={Settings}/>
        <Route  path='/notifications' component={Notification}/>
        <Route  path='/task1' component={Task1}/>
      
      </Switch>  
      

    </div>
  );
}

export default App;
