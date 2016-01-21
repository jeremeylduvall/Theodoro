var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');
var Footer = require('./footer');

var Hello = React.createClass({
  render: function() {
    return (
    	<div>
    		<Header />
    		<Footer />
	    </div>
	  );
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));