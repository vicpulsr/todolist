import React from 'react';
import './App.css';

import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

// import { Tasks } from './contexts/Tasks';
// import useTasks from './hooks/useTasks';

import TasksConfig from './config/TasksConfig';

function App() {


  return (
    <div className="container">
    <TasksConfig >
      <Container maxWidth="sm">
        <Header />
        <Main />
      </Container>
    </TasksConfig>
    </div>
  );
}

export default App;
