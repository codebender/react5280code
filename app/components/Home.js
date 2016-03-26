var React = require('react');
var BlogsList = require('./Blogs/BlogsList')
var axios = require('axios')

var Home = React.createClass({
  getInitialState: function(){
    return {
      blogs: []
    }
  },
  _getBlogs: function() {
    axios.get('http://www.5280code.com/api/blog_posts').
      then(function(resp) {
        this.setState({
          blogs: resp.data
        });
      }.bind(this))
  },
  componentDidMount: function(){
    this._getBlogs();
  },
  render: function(){
    return(
      <div className="col-md-8 col-sm-6 col-xs-12">
        <BlogsList blogs={this.state.blogs}/>
      </div>
    )
  }
})

module.exports = Home;
