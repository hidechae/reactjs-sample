'use strict';
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute
;

// components
var App    = require('./views/app.jsx'),
    Index  = require('./views/app/index.jsx'),
    Upload = require('./views/app/upload.jsx'),
    MyPage = require('./views/app/mypage.jsx')
;

var routes = (
  <Route name="index" path="/" handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="upload" handler={Upload}/>
    <Route name="mypage" path=":name" handler={MyPage}/>
  </Route>
);

module.exports = routes;
