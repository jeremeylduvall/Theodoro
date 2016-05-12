var React = require('react');

var Todo = React.createClass( {
	editTask: function( event ) {
		this.props.editTask( event.target.value );
	},

	render: function() {
		return (
			<div className="input-group" >
				<span className="input-group-addon">
						<input type="checkbox" aria-label="..." onChange={ this.props.onComplete } checked={ this.props.completed } />
				</span>
					<input type="text" className="form-control" value={ this.props.taskValue } disabled={ ! this.props.editing } onChange={ this.editTask } />
				<span className="input-group-btn">
					<button className={ "btn btn-default " + ( this.props.editing ? "hidden" : "" ) } type="button" onClick={ this.props.onEdit }>Edit</button>
					<button className={ "btn btn-default " + ( this.props.editing ? "" : "hidden" ) } type="button" onClick={ this.props.onDelete }>Delete</button>
					<button className={ "btn btn-default " + ( this.props.editing ? "" : "hidden" ) } type="button" onClick={ this.props.onSave }>Save</button>
				</span>
			</div>
		);
	}
} );

module.exports = Todo;



