var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./main');
var About = require('./about');
var hashHistory = require('react-router/lib/hashHistory');

var Routes = (
	<Router  history={hashHistory} >
		<Route path="/" component={Main} >
			<Route path="about" component={About} />
		</Route>
	</Router>
);

module.exports = Routes;