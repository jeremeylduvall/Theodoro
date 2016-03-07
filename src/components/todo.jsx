var React = require('react');

var Todo = React.createClass( {
	getInitialState: function() {
		return {
			editing: false,
			deleted: false,
			taskValue: "",
			checked: null
		};
	},

	componentWillMount: function() {
		this.setState( {
			taskValue: this.props.taskValue
		} );
	},

	componentWillReceiveProps: function( nextProps ) {
		if ( nextProps.taskValue !== this.state.taskValue ) {
			this.setState( {
				taskValue: nextProps.taskValue
			} );
		}
	},

	onEdit: function() {
		this.setState( {
			editing: true
		} );
	},

	onSave: function() {
		this.setState( {
			editing: false
		} );
	},

	handleDelete: function( item ) {
		return function() {
			this.setState( {
				editing: false
			} );

			return this.props.deleteItem( item );
		}.bind( this );
	},

	editTask: function( e ) {
		this.setState( {
			taskValue: e.target.value
		} );
	},

	onCheck: function( item ) {
		return function() {
			return this.props.completedItem( item );
		}.bind( this );

		this.setState( {
			checked: "checked"
		} );
	},

	render: function() {
		return (
			<div className="input-group" >
				<span className="input-group-addon">
					<input type="checkbox" aria-label="..." onClick={ this.onCheck( this ) } checked={ this.state.checked } />
				</span>
				<input type="text" className="form-control" value={ this.state.taskValue } disabled={ ! this.state.editing } onChange={ this.editTask } />
				<span className="input-group-btn">
					<button className={ "btn btn-default " + ( this.state.editing ? "hidden" : "" ) } type="button" onClick={ this.onEdit }>Edit</button>
					<button className={ "btn btn-default " + ( this.state.editing ? "" : "hidden" ) } type="button" onClick={ this.handleDelete( this ) }>Delete</button>
					<button className={ "btn btn-default " + ( this.state.editing ? "" : "hidden" ) } type="button" onClick={ this.onSave }>Save</button>
				</span>
			</div>
		);
	}
} );

module.exports = Todo;