import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './SidePanel';
import SidePanelToggle from './SidePanelToggle';
import getAnimationEvents from '../getAnimationEvents';



var App = React.createClass({

	getInitialState: function() {
		return {
			SidePanel: {
				'align': "left",	
				'isOpen' : ""
			}
					
		};
	},

	togglePanel: function() {
		var panel = this.state.SidePanel;

		panel.isOpen = !panel.isOpen

		this.setState({
			SidePanel: panel
		});	
	},

	render: function() {
		return (
			<div className="container">
				<h1>Hello World!</h1>
				<SidePanelToggle togglePanel={this.togglePanel} SidePanel={this.state.SidePanel} />
				<SidePanel SidePanel={this.state.SidePanel} />
			</div>
		);
	}
});

export default App;

