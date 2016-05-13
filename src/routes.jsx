var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./main');
var hashHistory = require('react-router/lib/hashHistory');

var Routes = (
	<Router  history={hashHistory} >
		<Route path="/" component={Main} />
	</Router>
);

module.exports = Routes;