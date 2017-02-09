// import React, { Component, PropTypes } from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
 
// import { Tasks } from '../api/experiments.js';

import React, { Component } from 'react';

var DataGrid = require('react-datagrid')

// App component - represents the whole app
export default class App extends Component {

  getExperiments(){
    return [
      {
        _id: 1,
        name: "DNA resequencing of renal cancer paired tumours",
        Nsamples: 49,
      },
      {
        _id: 2,
        name: "Differential expression of cell line A in hypoxia vs. normoxia.",
        Nsamples: 22,
      },
    ]
  }

  getDataGridColumns(){
    return [
      { name: '_id', title: '#', width: 50 },
      { name: 'name', width: '80%' },
      { name: 'Nsamples', title: 'Samples' }
    ]
  }

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
          <li>the number of samples</li>
        </ul>
        </p>
 
        <DataGrid
          idProperty='id'
          dataSource={this.getExperiments()}
          columns={this.getDataGridColumns()}
          style={{
            height: 500,
             width:'90%',
             marginLeft:'5%',
             marginRight:'5%'
           }}
           withColumnMenu={false}

        />

        </div>
    );
  }
}