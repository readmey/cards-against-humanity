import React from 'react';
import '@fontsource/roboto';
import StartGame from './views/StartGame';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={StartGame} />
      </Switch>
    </div>
  );
}

export default App;
