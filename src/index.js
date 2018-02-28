import React from 'react';
import ReactDOM from 'react-dom';

import { Title } from './components/title.component';

class App extends React.Component {
  render() {
    return <Title />;
  }
}

var mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
