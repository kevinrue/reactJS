import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Select from 'react-select';

import { Experiments } from '../api/experiments.js';

export default class ExperimentsDropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			disable: false,
			searchable: this.props.searchable,
			selectedValue: '',
			clearable: true,
		};
		this.updateValue = this.updateValue.bind(this); // React components using ES6 classes no longer autobind this to non React methods
	}

	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectedValue: newValue
		});
	}

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
};

ExperimentsDropdown.propTypes = {
	label: React.PropTypes.string,
	searchable: React.PropTypes.bool
};

ExperimentsDropdown.defaultProps = {
	label: 'Delete an experiment',
	searchable: true
};
