import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';

require('react-datagrid/index.css') // Essential to importing the CSS from react-datagrid!
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});