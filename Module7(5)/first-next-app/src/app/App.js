// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './about/components/Header';
import PostList from './about/components/PostList';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PostList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;