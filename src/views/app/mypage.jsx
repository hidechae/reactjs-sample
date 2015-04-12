'use strict';
var React  = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    RouteHandler = Router.RouteHandler
;

var Header = React.createClass({
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

var Navigation = React.createClass({
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

var MyPage = React.createClass({
  mixins: [ Router.State ],

  render: function () {
    var name = this.getParams().name;
    return (
      <div>
        <h1>{name}</h1>
        <Header/>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = MyPage;
