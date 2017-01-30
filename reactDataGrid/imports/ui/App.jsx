import React, { Component } from 'react';

var DataGrid = require('react-datagrid')

var data = [
  {
    index: 1,
    source: "tissue A",
    platform: "DNA sequencing",
  },
  {
    index: 2,
    source: "tissue B",
    platform: "RNA sequencing",
  },
]

var columns = [
  { name: 'index', title: '#', width: 50 },
  { name: 'source' },
  { name: 'platform' }
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
        Let us imagine we have a table of biological samples made of three columns:
        <ul>
          <li>a unique identifier</li>
          <li>the tissue of origin</li>
          <li>the type of data</li>
        </ul>
        </p>
 
        <DataGrid
          idProperty='id'
          dataSource={data}
          columns={columns}
          style={{height: 500}}

        />

        </div>
    );
  }
}