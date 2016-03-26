var React = require('react');
var Layout = require('../components/Layout');
var Home = require('../components/Home');
var Blog = require('../components/Blogs/Blog');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/blog/:blogId" component={Blog}/>
  </Route>
);
