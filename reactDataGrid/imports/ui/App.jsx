import React, { Component } from 'react';

var DataGrid = require('react-datagrid')

var data = [
  {
    index: 1,
    name: "DNA resequencing of renal cancer paired tumours",
    Nsamples: 49,
  },
  {
    index: 2,
    name: "Differential expression of cell line A in hypoxia vs. normoxia.",
    Nsamples: 22,
  },
]

var columns = [
  { name: 'index', title: '#', width: 50 },
  { name: 'name', width: '80%' },
  { name: 'Nsamples', title: 'Samples' }
]

// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Simple datagrid</h1>
        </header>

        <p>
        Let us imagine we have a table of experiments samples made of three columns:
        <ul>
          <li>a unique identifier</li>
          <li>a friendly name</li>
          <li>the type of data</li>
        </ul>
        </p>
 
        <DataGrid
          idProperty='id'
          dataSource={data}
          columns={columns}
          style={{
            height: 500,
             width:'90%',
             'margin-left':'5%',
             'margin-right':'5%'
           }}

        />

        </div>
    );
  }
}