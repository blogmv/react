var Blog = Blog || {};

(function() {
  'use strict';

  var Item = React.createClass({
    render: function() {
      var id = this.props.article.id
        , title = this.props.article.title;

      return (
        <li>
          <a href="#" data-id={id} className="list-group-item" onClick={this.handleClick}>{title}</a>
        </li>
      );
    },

    handleClick: function(e) {
      e.preventDefault();
      this.props.change(this.props.article);
    }
  });

  Blog.Sidebar = React.createClass({
    render: function() {
      var items = this.props.articles.map(function(article) {
        return <Item article={article} change={this.props.change} />;
      }.bind(this));

      return (
        <div className="col-md-3">
          <h2>JS News</h2>

          <ul className="list-group">
            {items}
          </ul>
        </div>
      );
    }
  });
})();
