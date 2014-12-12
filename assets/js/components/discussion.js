var Blog = Blog || {};

(function() {
  'use strict';

  var Item = React.createClass({
    render: function() {
      var name = this.props.comment.author_name
        , content = this.props.comment.content;

      return (
        <li>
          <b>{name}</b>
          <p>{content}</p>
        </li>
      );
    }
  });

  Blog.Discussion = React.createClass({
    getInitialState: function() {
      return {comments: []}
    },

    componentWillMount: function() {
      Blog.CommentsStore.sync(function(msg, data) {
        this.setState({comments: data});
      }.bind(this));
    },

    render: function() {
      var items = this.state.comments.map(function(comment) {
        return <Item comment={comment} />;
      });

      return (
        <ul className="discussion">
          {items}
              </ul>
      );
    }
  });
})();