var React = require('react');
var Header = require('./components/header');
var Footer = require('./components/footer');
var Clock = require('./components/clock');

var Main = React.createClass({
	render: function() {
		return (
			<div className="main">
				<Header />
					<Clock />
					{ this.props.children }
				<Footer />
			</div>
		);
	}
});

module.exports = Main;