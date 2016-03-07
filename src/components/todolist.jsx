var React = require('react');
var Todo = require('./todo');

var TodoList = React.createClass( {
	getInitialState: function() {
		return {
			taskValue: null,
			tasks: [],
			completedTasks: []
		};
	},

	componentDidMount: function() {
		this.tasks = [];
		this.completedTasks = [];
	},

	resetAddField: function() {
		this.setState( {
			taskValue: null
		} );
	},

	handleChange: function( e ) {
		this.setState( {
			taskValue: e.target.value
		} );
	},

	handleAdd: function () {
		if ( this.state.taskValue !== null ) {
			this.tasks.push( this.state.taskValue );
		} else {
			alert( 'You have to type something' );
		}

		this.setState( {
			tasks: this.tasks,
		} );

		this.resetAddField();
	},

	removeTask: function( task ) {
		var index = this.state.tasks.indexOf( task.props.taskValue );

		if ( index > -1 ) {
			this.tasks.splice( index, 1 );
		}
	},

	deleteItem: function( task ) {
		this.removeTask( task );

		this.setState( {
			tasks: this.tasks
		} );
	},

	completeItem: function( task ) {
		this.removeTask( task );

		this.completedTasks.push( task.props );

		this.setState( {
			tasks: this.tasks,
			completedTasks: this.completedTasks
		} );
	},

	buildTodo: function( task ) {
		return (
			<Todo
				taskValue = { task }
				key = { this.state.tasks.indexOf( task ) }
				deleteItem = { this.deleteItem }
				completedItem = { this.completeItem }
			/>
		);
	},

	render: function() {
		if ( this.tasks ) {
			var taskList = this.state.tasks.map( this.buildTodo );
		}

		if ( this.completedTasks ) {
			var completedTasks = this.state.completedTasks.map( this.buildTodo );
		}

		return (
			<div>
				<h2 className="todolist">Todo List</h2>
				<div className="input-group">
  				<input type="text" className="form-control" value={ this.state.taskValue } aria-describedby="basic-addon1" onChange={ this.handleChange }></input>
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={ this.handleAdd }>
							Add
						</button>
					</span>
				</div>
				<div className="row">
					<div className="completed col-md-6">
						<h4>Completed</h4>
						{ completedTasks }
					</div>
					<div className="completed col-md-6">
						<h4>Incompleted</h4>
						{ taskList }
					</div>
				</div>
			</div>
		);
	}
} );

module.exports = TodoList;