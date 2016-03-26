var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Layout = React.createClass({
  render: function(){
    return (
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">5280 Code</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
});

module.exports = Layout;
