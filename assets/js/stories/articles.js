var Blog = Blog || {};

(function() {
  'use strict';
  
  Blog.ArticlesStore = {
    url: 'http://blogmv-api.appspot.com/api/articles',

    fetch: function() {
      qwest
        .get(this.url)
        .then(function(data) {
          PubSub.publish('sync.articles', data);
        });
    },

    sync: function(callback) {
      PubSub.subscribe('sync.articles', callback);
    }
  };

})();
