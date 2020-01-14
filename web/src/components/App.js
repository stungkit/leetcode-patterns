import React from 'react';
import dotenv from 'dotenv';

import './styles.scss';

import Navigation from './Navigation';
import Tabs from './Tabs';

import { initGA, PageView } from './Shared/Tracking';

class App extends React.Component {
  componentDidMount() {
    dotenv.config();

    initGA(process.env.REACT_APP_ANALYTICS, { debug: false });
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Tabs />
      </div>
    );
  }
}

export default App;
