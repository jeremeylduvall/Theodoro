var Button = require('./button');
var React = require('react');

var Clock = React.createClass({
	getInitialState: function() {
	    return {
	    	minutes: "25",
	    	seconds: "00",
	    	rest: "5"
	    };
	},

	handleTimeChange: function(minutes) {
		if (this.state.minutes !== minutes) {
			this.setState({
				minutes: minutes,
			});
		}
	},

	runClock: function() {
		if (this.state.seconds === "00") {
			var seconds = 60;
			this.setState({
				seconds: seconds
			})
		}

		var seconds = this.state.seconds;
		seconds = seconds - 1;
		this.setState({
			seconds: seconds
		})
	},

	playClock: function() {
		var interval = setInterval(this.runClock, 1000);
	},

  render: function() {
  	var lengths = [
	  	{
	  		minutes: "25",
	  		rest: "5",
	  		label: "25 min on/5 min off"
	  	},
	  	{
	  		minutes: "50",
	  		rest: "10",
	  		label: "50 min on/10 min off"
	  	}
 		];

  	var buttonGroup = lengths.map(function(length) {
  		return <Button
  				key={length.minutes}
					label={length.label}
					handleClick={this.handleTimeChange.bind(this, length.minutes)}
					minutes={length.minutes}
					classNames={"btn btn-default " + (this.state.minutes === length.minutes ? "active" : "")}
				/>
  	}.bind(this));

    return (
    	<div>
	    	<div className="btn-group timeselector" role="group" aria-label="...">
	    		{buttonGroup}
	    	</div>
	    	<br />
	    	<br />
	    	<div id="minutes">{this.state.minutes}<span id="label">Minutes</span></div><div id="seconds">{this.state.seconds}<span id="label">Seconds</span></div>
	    	<div className="glyphicon glyphicon-play" aria-hidden="true" onClick={this.playClock}></div>
	    </div>
	  );
  }
});

module.exports = Clock;