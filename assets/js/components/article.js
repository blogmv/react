var Blog = Blog || {};

(function() {
  'use strict';

  var Discussion = Blog.Discussion;

  Blog.Article = React.createClass({
    render: function() {
      var article = this.props.article;

      return (
        <section className="col-md-9">
          <article>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </article>

          <h2>Discussion</h2>

          <Discussion />
        </section>
      );
    }
  });
})();
