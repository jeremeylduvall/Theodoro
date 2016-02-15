var React = require('react');
var Header = require('./components/header');
var Footer = require('./components/footer');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
					<p>
						The now-infamous Pomodoro method is a fantastic way to focus and get work done. It's a pattern typically of 25 minutes of work followed by 5 minutes of rest. If you're curious, you can read a bit more about the actual method here:
						<br></br>
						<br></br>
						http://pomodorotechnique.com/
						<br></br>
						<br></br>
						There are a slew of fantastic apps out there to help you track your Pomodoro intervals. Similarly, there are apps that help you manage your tasks (Things is my preferred task manager). Until recently, there wasn't one app that combined both techniques. This is actually the first one I've seen:
						<br></br>
						<br></br>
						https://itunes.apple.com/us/app/pomodoro-done-time-tracker/id1071518638?mt=12
						<br></br>
						<br></br>
						Ideally, Theodoro will have the best of both worlds and will live in a browser tab. I'm partially building it to scratch my own itch and partially to improve at React.
						<br></br>
						<br></br>
						I'll update this as the project gets closer to completion.
					</p>
				<Footer />
			</div>
		);
	}
});

module.exports = About;