import React from 'react';
import ReactDOM from 'react-dom';


var SidePanel = React.createClass({
	render: function() {

		var panel = this.props.SidePanel;
		var alignment = "align-" + panel.align;
		var animation;

		if (panel.isOpen !== "") {
			if (panel.isOpen) {
				animation = "on-canvas slideIn-" + panel.align
			} else{
				animation = "off-canvas slideOut-" + panel.align
			}			
		} else {
			animation = "idle"
		}
							
		var SidePanelClasses = "slide-panel " + alignment + " " + animation;

		return (
			<div id="side-panel" className={SidePanelClasses}>
				<h1>Hello SidePanel!</h1>
			</div>
		);
	}
});

export default SidePanel;