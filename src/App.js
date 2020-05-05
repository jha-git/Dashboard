import React from 'react';
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
      {/*<Settings/>
      <Notification/>*/}
      <Task1/>
    </div>
  );
}

export default App;
