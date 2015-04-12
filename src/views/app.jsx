'use strict';
var React  = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,

    Navbar = require('../components/layout/navbar.jsx')
;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
