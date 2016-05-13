var React = require('react');

var Todo = React.createClass( {
	propTypes: {
		taskValue: React.PropTypes.string,
		editing: React.PropTypes.bool,
		completed: React.PropTypes.bool,
		onComplete: React.PropTypes.func,
		onEdit: React.PropTypes.func,
		onDelete: React.PropTypes.func,
		onSave: React.PropTypes.func,
		onComplete: React.PropTypes.func,
		editTask: React.PropTypes.func
	},

	// Fired onChange passing the event into this.props.editTask
	editTask: function( event ) {
		this.props.editTask( event.target.value );
	},

	render: function() {
		return (
			<div className="input-group" >
				<span className="input-group-addon">
						<input type="checkbox" aria-label="..." onChange={ this.props.onComplete } checked={ this.props.completed } />
				</span>
					<input type="text" className="form-control" value={ this.props.taskValue } disabled={ ! this.props.editing || this.props.completed } onChange={ this.editTask } />
				<span className="input-group-btn">
					<button className={ "btn btn-default " + ( this.props.editing || this.props.completed ? "hidden" : "" ) } type="button" onClick={ this.props.onEdit }>Edit</button>
					<button className={ "btn btn-default " + ( this.props.editing && ! this.props.completed ? "" : "hidden" ) } type="button" onClick={ this.props.onDelete }>Delete</button>
					<button className={ "btn btn-default " + ( this.props.editing && ! this.props.completed ? "" : "hidden" ) } type="button" onClick={ this.props.onSave }>Save</button>
				</span>
			</div>
		);
	}
} );

module.exports = Todo;



