var Button = require('./button');
var React = require('react');

var intervalLengths = [
	{
		minutes: "25",
		rest: "5",
		label: "25 min on/5 min off",
		totalTime: "1500",
		option: "short"
	},
	{
		minutes: "50",
		rest: "10",
		label: "50 min on/10 min off",
		totalWorkTime: "3000",
		option: "long"
	}
];

var Clock = React.createClass( {
	getInitialState: function() {
		return {
			minutes: "25",
			seconds: "00",
			totalWorkTime: "1500",
			playing: false,
			option: "short",
			resting: false,
		};
	},

	componentWillMount: function() {
		this.intervals = [];

		this.completedIntervals = 0;
	},

	setShort: function() {
		this.setState( {
			minutes: "25",
			seconds: "00",
			totalTime: "1500",
			playing: false,
			option: "short",
			resting: false
		} );
	},

	setLong: function() {
		this.setState( {
			minutes: "50",
			seconds: "00",
			totalWorkTime: "3000",
			playing: false,
			option: "long",
			resting: false
		} );
	},

	handleTimeChange: function() {
		this.intervals.forEach( clearInterval );

		if ( this.state.option === "short" ) {
			this.setLong();
		} else {
			this.setShort();
		}
	},

	playClock: function() {
		var totalWorkTime = ( this.state.minutes * 60 + this.state.seconds );

		if ( this.state.seconds === "00" || this.state.seconds === 0 && totalWorkTime !== 0 ) {
			this.setState( {
				minutes: this.state.minutes - 1,
				seconds: 59,
				totalWorkTime: totalWorkTime
			} );
		} else if ( totalWorkTime > 0 ) {
			this.setState( {
				seconds: this.state.seconds - 1,
				totalWorkTime: totalWorkTime
			} );
		} else if ( this.state.resting === true ) {
			this.setShort();
			this.intervals.forEach( clearInterval );
		} else {
			this.startRest();
		}
	},

	clockInterval: function() {
		this.setState( {
			playing: true
		} );

		this.intervals.push( setInterval.apply( null, [ this.playClock, 1000 ] ) );
	},

	stopClock: function() {
		this.intervals.forEach( clearInterval );

		this.setShort();
	},

	pauseClock: function() {
		this.intervals.forEach( clearInterval );

		this.setState( {
			playing: false
		} );
	},

	startRest: function() {
		this.intervals.forEach( clearInterval );

		this.completedIntervals++;

		this.setState( {
			resting: true,
		} );

		if ( this.state.option === "short" && this.state.resting === true ) {
			this.setState( {
				minutes: "5",
				seconds: "00"
			} );
		} else {
			this.setState( {
				minutes: "10",
				seconds: "00"
			} );
		}

		this.intervals.push( setInterval.apply( null, [ this.playClock, 20 ] ) );
	},

	render: function() {

		var buttonGroup = intervalLengths.map( function( length ) {
			return (
				<Button
					key={ length.minutes }
					label={ length.label }
					handleClick={ this.handleTimeChange.bind( this, length.minutes ) }
					minutes={ length.minutes }
					classNames={ "btn btn-default " + ( this.state.option === length.option ? "active" : "" ) }
				/>
			);
		}.bind( this ) );

		return (
			<div>
				<div className="btn-group timeselector" role="group" aria-label="...">
					{ buttonGroup }
				</div>
				<br />
				<br />
				<div className={"alert alert-success " + ( this.state.resting ? "" : "hidden" ) } role="alert">Nice work! Time to chill for a bit</div>
				<div id="minutes" >{ this.state.minutes }<span id="label">Minutes</span></div><div id="seconds">{ this.state.seconds }<span id="label">Seconds</span></div>
				<span id="controls">
					<div className={ "glyphicon glyphicon-play " + ( this.state.playing ? "hidden" : "" ) } aria-hidden="true" onClick={ this.clockInterval }></div>
					<div className={ "glyphicon glyphicon-stop " + ( this.state.playing ? "" : "hidden" ) } aria-hidden="true" onClick={ this.stopClock }></div>
					<div className={ "glyphicon glyphicon-pause " + ( this.state.playing ? "" : "hidden" ) } aria-hidden="true" onClick={ this.pauseClock }></div>
				</span>
				<div className={ "intervalMarker " + ( this.completedIntervals > 0 ? "" : "hidden" ) }><em>Completed Intervals: { this.completedIntervals }</em></div>
			</div>
		);
	}
} );

module.exports = Clock;