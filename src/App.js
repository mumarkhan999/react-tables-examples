// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basic.table';
import FilterTableComponent from './components/filter.table';
import PaginationTableComponent from './components/pagination.table';
import SortingTableComponent from './components/sorting.table';
import ExpandableTableComponent from './components/expandable.table';

function App() {

  return (
    <div className="App">





      <h3>Filter Table using <code>react-table</code></h3>

      <FilterTableComponent />



    </div>
  );
}

export default App;
