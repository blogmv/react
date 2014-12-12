var Blog = Blog || {};

(function() {
  'use strict';
  
  Blog.CommentsStore = {
    url: function() {
      return 'http://blogmv-api.appspot.com/api/articles/' + this.id + '/comments/';
    },

    fetch: function() {
      qwest
        .get(this.url())
        .then(function(data) {
          PubSub.publish('sync.comments', data);
        });
    },

    sync: function(callback) {
      PubSub.subscribe('sync.comments', callback);
    },

    save: function(data, callback) {
      qwest
        .post(this.url(), data, {dataType:'json'})
        .then(callback)
        .catch(function(message) {
          console.log(message)
        });
    } 
  };

})();
