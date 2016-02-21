var React = require('react');
var Todo = require('./todo');

var taskDefault = "What do you have to do today?";

var TodoList = React.createClass( {
	getInitialState: function() {
	    return {
	    	taskValue: taskDefault
	    };
	},

	componentDidMount: function() {
		this.tasks = [];
	},

	resetAddField: function() {
		this.setState( {
			taskValue: taskDefault
		} );
	},

	handleChange: function( e ) {
		this.setState( {
			taskValue: e.target.value
		} );
	},

	handleAdd: function () {
		this.tasks.push(this.state.taskValue);

		this.resetAddField();
	},

	render: function() {
		if ( this.tasks ) {
			var taskList = this.tasks.map( function( task ) {
				return (
					<Todo
						taskItem = {task}
						key = { this.tasks.indexOf( task ) }
						editing = { false }
					/>
				);
			}.bind( this ) );
		}

		return (
			<div>
				<h2 className="todolist">Todo List</h2>
				<div className="input-group">
  				<input type="text" className="form-control" placeholder={ this.state.taskValue } aria-describedby="basic-addon1" onChange={ this.handleChange }></input>
  				<span className="input-group-btn">
        		<button className="btn btn-default" type="button" onClick={ this.handleAdd }>
        			Add
        		</button>
      		</span>
				</div>
				<div className="row">
					<div className="completed col-md-6">
						<h4>Completed</h4>
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