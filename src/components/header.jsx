var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#"><strong>Theodoro</strong><span className="tagline"> - Pomodoro Meets Todo</span></a>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="http://twitter.com/jeremeyd"><span className="genericon genericon-twitter"></span></a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;