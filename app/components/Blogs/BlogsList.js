var React = require('react')
var Router = require('react-router')
var Link = Router.Link;
var moment = require('moment')

var BlogsList = React.createClass({
  propTypes: {
    blogs: React.PropTypes.array.isRequired
  },
  render: function(){
    var blogPosts = this.props.blogs.map(function(blog, index){
      return (
        <Link to={'/blog/'+blog.id} className="list-group-item" key={blog.id}>
          <div className="label label-default">
            { moment(blog.created_at).format("MMMM Do YYYY") }
          </div> - {blog.title}
        </Link>
      )
    })
    return(
      <div>
        <h2>Recent Blogs</h2>
        <ul className="list-group col-md-8">
          { blogPosts }
        </ul>
      </div>
    )
  }
})

module.exports = BlogsList;
