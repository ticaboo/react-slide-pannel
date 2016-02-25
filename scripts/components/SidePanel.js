import React from 'react';
import ReactDOM from 'react-dom';
import SidePanelToggle from './SidePanelToggle';


var SidePanel = React.createClass({

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

		var panel = this.state.SidePanel;
		var alignment = "align-" + panel.align;
		var animation;

		if (panel.isOpen !== "") {
			if (panel.isOpen) {
				animation = "slideIn-" + panel.align
			} else{
				animation = "slideOut-" + panel.align
			}			
		} else {
			animation = "idle"
		}
							
		var SidePanelClasses = "slide-panel " + alignment + " " + animation;

		return (
			<div>
				<div id="side-panel" className={SidePanelClasses}>
					{this.props.children}
				</div>
				<SidePanelToggle togglePanel={this.togglePanel} SidePanel={this.state.SidePanel} />
			</div>
		);
	}
	
});

export default SidePanel;