var React = require('react');
var ReactDOM = require('react-dom');

var Footer = React.createClass({
  render: function() {
    return (
			<nav className="navbar navbar-default navbar-bottom footer" role="navigation">
			  <div className="footercontainer">
			  	Created by <a href="http://twitter.com/jeremeyd"><span className="genericon genericon-twitter"></span> @JeremeyD</a> - Read more about this project
			  </div>
			</nav>
	  );
  }
});

module.exports = Footer;