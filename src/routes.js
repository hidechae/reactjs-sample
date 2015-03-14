'use strict';
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute
;

// components
var App = require('./component/app'),
    Inbox = require('./component/app/inbox'),
    Calendar = require('./component/app/calendar'),
    Dashboard = require('./component/app/dashboard')
;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

module.exports = routes;
