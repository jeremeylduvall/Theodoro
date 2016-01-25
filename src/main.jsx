var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
					{ this.props.children }
				<Footer />
			</div>
		);
	}
});

module.exports = Main;