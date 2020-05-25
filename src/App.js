import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Top from './containers/Top';

const App = () => {
  return (
    <div className="App">
      <Toolbar />
      <Top />
    </div>
  );
}

export default App;
