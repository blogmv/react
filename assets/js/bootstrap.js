var Blog = Blog || {};

(function() {
  'use strict';

  var Article = Blog.Article
    , Sidebar = Blog.Sidebar
    , Comment = Blog.Comment;

  var Bootstrap = React.createClass({
    getInitialState: function() {
      return {
        curr: {},
        articles: []
      }
    },

    componentWillMount: function() {
      Blog.ArticlesStore.sync(function(msg, data) {
        this.setState({articles: data})
        this.handleArticle(data[0]);
      }.bind(this));

      Blog.ArticlesStore.fetch();
    },

    render: function() {
      return (
        <div>
          <section className="container main">
            <div className="row">
              <Sidebar articles={this.state.articles} change={this.handleArticle} />
              <Article article={this.state.curr} />
            </div>
          </section>
            
          <Comment onSave={this.handleComment} />
        </div>
      );
    },

    handleArticle: function(article) {
      this.setState({curr: article});
      Blog.CommentsStore.id = article.id;
      Blog.CommentsStore.fetch();
    },

    handleComment: function(comment) {
      Blog.CommentsStore.save(comment, function(res) {
        Blog.CommentsStore.fetch(); 
      });
    }
  });

  var mount = document.getElementById('bootstrap');

  React.render(<Bootstrap />, mount);
})();
