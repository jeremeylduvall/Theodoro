var React = require('react');

var Button = React.createClass({

  render: function() {
    return (
		  <button
		  	onClick={this.props.handleClick}
		  	type="button"
		  	className={this.props.classNames}
		  >
		  	{this.props.label}
		  </button>
    );
  }
});

module.exports = Button;