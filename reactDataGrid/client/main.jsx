import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

require('react-datagrid/index.css') // Essential to importing the CSS from react-datagrid!
require('react-select/dist/react-select.css') // Essential to importing the CSS from react-select!
 
Meteor.startup(() => {
  render(
  	<App />,
  	document.getElementById('render-target'));
});
