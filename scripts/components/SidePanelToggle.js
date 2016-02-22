import React from 'react';
import ReactDOM from 'react-dom';


var SidePanelToggle = React.createClass({

	render: function() {
		
		var isOpen = this.props.SidePanel.isOpen ? "SidePanelToggle open" : "SidePanelToggle closed";

		return (
			<div className={isOpen} onClick={this.props.togglePanel}></div>
		);
	}
});

export default SidePanelToggle;