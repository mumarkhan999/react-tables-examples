// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import FilterTableComponent from './components/filter.table';

function App() {

  return (
    <Router>
    <div className="App">





      <h3>Filter Table using <code>react-table</code></h3>

      <FilterTableComponent />



      </div>
    </Router>
  );
}

export default App;
