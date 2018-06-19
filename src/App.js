import React from 'react';
import { Router, Route, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history'
import 'fetch-ie8'

let msg = `搭建成功`;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    );
  }
}

export default App;