var Button = require('./button');
var React = require('react');

var SetIntervalMixin = {
	componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push( setInterval.apply( null, arguments ) );
  },

  clearInterval: function() {
    this.intervals.forEach( clearInterval );
  }
};

var Clock = React.createClass({

	mixins: [ SetIntervalMixin ],

	getInitialState: function() {
    return {
    	minutes: "2",
    	seconds: "00",
    	totalWorkTime: "1500",
    	playing: false,
    	option: "short",
    	resting: false
    };
	},

	handleTimeChange: function() {
		this.clearInterval();

		if ( this.state.option === "short" ) {
			this.setLong();
		} else {
			this.setShort();
		}
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
			this.clearInterval();
		} else {
			this.startRest();
		}
	},

	clockInterval: function() {
		this.setState( {
			playing: true
		} );

		this.setInterval( this.playClock, 20 );
	},

	stopClock: function() {
		this.clearInterval();

		this.setShort();
	},

	pauseClock: function() {
		this.clearInterval();

		this.setState( {
			playing: false
		} );
	},

	startRest: function() {
		this.clearInterval();

		this.setState( {
			resting: true
		} );

		if ( this.state.option === "short" && this.state.resting === true ) {
			this.setState( {
				minutes: "5",
				seconds: "00"
			} )
		} else {
			this.setState( {
				minutes: "10",
				seconds: "00"
			} )
		}

		this.setInterval( this.playClock, 20 );
	},

  render: function() {
  	var lengths = [
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

  	var buttonGroup = lengths.map( function( length ) {
  		return <Button
  				key={ length.minutes }
					label={ length.label }
					handleClick={ this.handleTimeChange.bind( this, length.minutes ) }
					minutes={ length.minutes }
					classNames={ "btn btn-default " + ( this.state.option === length.option ? "active" : "" ) }
				/>
  	}.bind( this ));

    return (
    	<div>
	    	<div className="btn-group timeselector" role="group" aria-label="...">
	    		{ buttonGroup }
	    	</div>
	    	<br />
	    	<br />
	    	<div id="minutes" className={ this.state.resting ? "resting" : "" }>{ this.state.minutes }<span id="label">Minutes</span></div><div id="seconds" className={ this.state.resting ? "resting" : "" }>{ this.state.seconds }<span id="label">Seconds</span></div>
	    	<span id="controls">
		    	<div className={ "glyphicon glyphicon-play " + ( this.state.playing ? "hidden" : "" ) } aria-hidden="true" onClick={ this.clockInterval }></div>
		    	<div className={ "glyphicon glyphicon-stop " + ( this.state.playing ? "" : "hidden" ) } aria-hidden="true" onClick={ this.stopClock }></div>
		    	<div className={ "glyphicon glyphicon-pause " + ( this.state.playing ? "" : "hidden" ) } aria-hidden="true" onClick={ this.pauseClock }></div>
		    </span>
	    </div>
	  );
  }
});

module.exports = Clock;