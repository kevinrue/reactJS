import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Select from 'react-select';

import { Experiments } from '../api/experiments.js';

var ExperimentsField = React.createClass({
	displayName: 'ExperimentsField',
	propTypes: {
		label: React.PropTypes.string,
		searchable: React.PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'Experiments:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			disabled: false,
			searchable: this.props.searchable,
			selectedValue: '',
			clearable: true,
		};
	},
	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectedValue: newValue
		});
	},
	focusStateSelect () {
		this.refs.stateSelect.focus();
	},
	render () {
		var options = [
			{label: "first", value: 1},
			{label: "second", value: 2},
			{label: "third", value: 3}
		];

		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					ref="experimentSelect"
					autofocus
					options={options}
					simpleValue
					clearable={this.state.clearable}
					name="selected-experiment"
					disabled={this.state.disabled}
					value={this.state.selectedValue}
					onChange={this.updateValue}
					searchable={this.state.searchable}
				/>
			</div>
		);
	}
});

module.exports = ExperimentsField;
