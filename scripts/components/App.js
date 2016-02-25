import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './SidePanel';


var Menu = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Menu</h1>
			</div>
		);
	}
});


var App = React.createClass({
	
	render: function() {
		return (
			<div className="container">				
				<SidePanel>
					<Menu />
				</SidePanel>
			</div>
		);
	}
});

export default App;

