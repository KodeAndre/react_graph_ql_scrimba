import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="react_graph_ql_scrimba">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);