import React, { Component, PropTypes } from 'react';
// To use data from a Meteor collection inside a React component,
// we can use an Atmosphere package react-meteor-data
// which allows us to create a "data container" to feed Meteor's reactive data
// into React's component hierarchy.
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Experiments } from '../api/experiments.js';

var DataGrid = require('react-datagrid')

// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const experimentName = ReactDOM.findDOMNode(this.refs.experimentNameInput).value.trim();
 
    Experiments.insert({
      name: experimentName,
      Nsamples: 0 // new experiment: 0 samples
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.experimentNameInput).value = '';
  }

  getDataGridColumns() {
    return [
      { name: '_id', width: '5%' },
      { name: 'name', width: '85%' },
      { name: 'Nsamples', title: 'Samples', width: '10%' }
    ]
  }

  getMaxExperimentId() {
    return
  }

  renderExperimentTable() {
    return (
      <DataGrid
          idProperty='id'
          dataSource={this.props.experiments}
          columns={this.getDataGridColumns()}
          style={{
            height: 400,
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
          Let us imagine we have a table of experiments samples made of two columns:
          <ul>
            <li>a friendly name</li>
            <li>the number of samples</li>
          </ul>
        </p>
        <p>
          The table would then look something like the following (modulo CSS):
        </p>
        {/* Render (=insert) the experiment table here. */}
        {this.renderExperimentTable()}
        <header>
          <h1>Add a new experiment</h1>
        </header>
        <p>
          At its simplest, adding a new experiment in the database should be as simple
          as inserting a new name in the collection of experiments, without any associated
          sample.
        </p>
        {/*
          The form element has an 'onSubmit' attribute that references a method on the component
          called 'handleSubmit'.
          In React, this is how you listen to browser events, like the submit event on the form.
          The input element has a ref property which will let us easily access this element later.
        */}
        <form className="new-experiment" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="experimentNameInput"
            placeholder="Type to add a new experiment"
          />
        </form>
        <p>
          Note that MongoDB automatically creates an identifier for the new entry
          as described <a href="https://docs.mongodb.com/manual/reference/bson-types/#objectid">here</a>.
        </p>
        <p>
          However, the application does not check whether the name of the new experiment
          already exists in the collection. This will require some additional sanity check.
        </p>

      </div>
    );
  }
}

App.propTypes = {
  experiments: PropTypes.array.isRequired,
};

// The wrapped 'App' component fetches tasks from the Tasks collection
// and supplies them to the underlying 'App' component it wraps as the 'tasks' prop.
export default createContainer(() => {
  return {
    experiments: Experiments.find({}).fetch(),
  };
}, App);