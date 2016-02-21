var React = require('react');

var Todo = React.createClass( {
	render: function() {
		return (
			<div className="input-group">
				<span className="input-group-addon">
					<input type="checkbox" aria-label="..." />
				</span>
				<input type="text" className="form-control" value={ this.props.taskItem } disabled={ this.props.editing } />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button">Edit</button>
				</span>
			</div>
		);
	}
} );

module.exports = Todo;