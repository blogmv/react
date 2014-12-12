var Blog = Blog || {};

(function() {
  'use strict';

  Blog.Comment = React.createClass({
    getInitialState: function() {
      return {
        author_name: '',
        author_email: '',
        content: ''
      }
    },

    render: function() {
      return (
        <section className="comments">
          <h3>Write a comment</h3>

          <form role="form" onSubmit={this.handleSubmit}>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Name"
                name="author_name"
                value={this.state.author_name}
                onChange={this.handleChange} />
            </div>

            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control input-lg"
                placeholder="Email"
                name="author_email"
                value={this.state.author_email}
                onChange={this.handleChange} />
            </div>

            <div className="form-group col-md-12">
              <textarea
                className="form-control input-lg"
                placeholder="Comment"
                name="content"
                value={this.state.content}
                onChange={this.handleChange} />
              <button className="btn btn-lg btn-primary btn-block" type="submit">Post comment</button>
            </div>
          </form>
        </section>
      );
    },

    handleSubmit: function(e) {
      e.preventDefault();

      this.props.onSave(this.state);

      this.setState({
        author_name: '',
        author_email: '',
        content: ''
      });

    },

    handleChange: function(e) {
      var input = {};
      input[e.target.name] = e.target.value;
      this.setState(input);
    }
  });
})();
