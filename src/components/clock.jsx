var Button = require('./button');
var React = require('react');

var Clock = React.createClass({
	getInitialState: function() {
	    return {
	    	minutes: "1",
	    	seconds: "00",
	    	rest: "5",
	    	totalWorkTime: "1500",
	    	playing: false
	    };
	},

	handleTimeChange: function(minutes) {
		if (this.state.minutes !== minutes) {
			this.setState({
				minutes: minutes,
			});
		}
	},

	clockInterval: function() {
		var interval = setInterval(this.runClock, 50);
	},

	runClock: function() {
		var seconds = this.state.seconds;
		this.setState({
			playing: true
		})

		if (seconds === "00" || seconds === "0") {
			seconds = 60;
			var minutes = this.state.minutes - 1;
			this.setState({
				seconds: seconds,
				minutes: minutes,
			})
		}

		seconds = seconds - 1;

		this.setState({
			seconds: seconds,
			totalTime: (this.state.minutes * 60) + this.state.seconds
		})

		if (this.state.totalTime === 1) {
			alert('Time is up');
			this.stopClock;
		}
	},

	stopClock: function() {
		clearInterval(interval);
	},

  render: function() {
  	var lengths = [
	  	{
	  		minutes: "25",
	  		rest: "5",
	  		label: "25 min on/5 min off",
	  		totalTime: "1500"
	  	},
	  	{
	  		minutes: "50",
	  		rest: "10",
	  		label: "50 min on/10 min off",
	  		totalWorkTime: "3000"
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
	    	<span id="controls">
		    	<div className={"glyphicon glyphicon-play " + ( this.state.playing ? "hidden" : "" )} aria-hidden="true" onClick={this.clockInterval}></div>
		    	<div className={"glyphicon glyphicon-stop " + ( this.state.playing ? "" : "hidden" )} aria-hidden="true" onClick={this.playClock}></div>
		    	<div className={"glyphicon glyphicon-pause " + ( this.state.playing ? "" : "hidden" )} aria-hidden="true" onClick={this.playClock}></div>
		    </span>
	    </div>
	  );
  }
});

module.exports = Clock;