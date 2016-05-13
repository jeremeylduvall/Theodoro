var React = require('react');
var ReactDOM = require('react-dom');

var Footer = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default navbar-bottom footer navbar-fixed-bottom" role="navigation">
				<div className="footercontainer">
					Created by <a href="http://twitter.com/jeremeyd"><span className="genericon genericon-twitter"></span> @JeremeyD</a> - <a href="https://github.com/jeremeylduvall/Theodoro/blob/master/README.md">Read more about this project</a>
				</div>
			</nav>
		);
	}
});

module.exports = Footer;