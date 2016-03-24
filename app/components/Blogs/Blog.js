var React = require('react')
var axios = require('axios')
var moment = require('moment')

var Blog = React.createClass({
  getInitialState: function(){
    return {
      blog: {}
    }
  },
  _getBlog: function(blogId) {
    axios.get('http://www.5280code.com/api/blog_posts/'+blogId).
      then(function(resp) {
        this.setState({
          blog: resp.data
        });
      }.bind(this))
  },
  componentDidMount: function(){
    this._getBlog(this.props.params.blogId);
  },
  render: function(){
    return (
      <div className="blogPost">
        <h1 className="text-center">{this.state.blog.title}</h1>
        <p className="text-center">
          By {this.state.blog.author} - { moment(this.state.blog.created_at).format("MMMM Do YYYY") }
        </p>
        <hr/>
        <div dangerouslySetInnerHTML={ {__html: this.state.blog.html } }>

        </div>
      </div>
    )
  }
})

module.exports = Blog;
