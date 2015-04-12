'use strict';
var React  = require('react'),
    Router = require('react-router'),

    routes = require('./routes.jsx')
;

var dispatcher = require('./dispatcher/app-dispatcher');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
