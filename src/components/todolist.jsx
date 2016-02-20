var React = require('react');

var taskDefault = "What do you have to do today?";

var TodoList = React.createClass( {
	getInitialState: function() {
	    return {
	    	taskValue: taskDefault
	    };
	},

	handleChange: function( e ) {
		this.setState( {
			taskValue: e.target.value
		} );
	},

	handleAdd: function () {
		console.log(this.state.taskValue);

		this.setState( {
			taskValue: taskDefault
		} );
	},

	render: function() {
		return (
			<div>
				<h2 className="todolist">Todo List</h2>
				<div className="input-group">
  				<input type="text" className="form-control" placeholder={ this.state.taskValue } aria-describedby="basic-addon1" onChange={ this.handleChange }></input>
  				<span className="input-group-btn">
        		<button className="btn btn-default" type="button" onClick={ this.handleAdd }>Add</button>
      		</span>
				</div>
				<div className="row">
					<h4 className="completed col-md-6">Completed</h4>
					<h4 className="incompleted col-md-6">Incompleted</h4>
				</div>
			</div>
		);
	}
} );

module.exports = TodoList;