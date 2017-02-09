import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Experiments } from '../api/experiments.js';

var DataGrid = require('react-datagrid')

// App component - represents the whole app
class App extends Component {

  getDataGridColumns() {
    return [
      { name: '_id', title: '#', width: 50 },
      { name: 'name', width: '80%' },
      { name: 'Nsamples', title: 'Samples' }
    ]
  }

  renderExperimentTable() {
    return (
      <DataGrid
          idProperty='id'
          dataSource={this.props.experiments}
          columns={this.getDataGridColumns()}
          style={{
            height: 500,
             width:'90%',
             marginLeft:'5%',
             marginRight:'5%'
           }}
           withColumnMenu={false}

        />
      )
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
 
        {this.renderExperimentTable()}

        </div>
    );
  }
}

App.propTypes = {
  experiments: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    experiments: Experiments.find({}).fetch(),
  };
}, App);