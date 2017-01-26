import React, { Component } from 'react';

var DataGrid = require('react-datagrid')

var data = [
  {
    index: 1,
    firstName: "Kevin",
    lastName: "Rue",
    city: "Oxford",
    email: "kevin.rue@test.com"
  },
  {
    index: 2,
    firstName: "Rafik",
    lastName: "Salama",
    city: "Oxford",
    email: "rafik.salama@test.com"
  }
]

var columns = [
  { name: 'index', title: '#', width: 50 },
  { name: 'firstName' },
  { name: 'lastName'  },
  { name: 'city' },
  { name: 'email' }
]

// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Simple datagrid</h1>
        </header>
 
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