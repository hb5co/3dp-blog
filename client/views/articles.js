Template.articles.onCreated(function () {
  this.subscribe('articles');
});

Template.articles.helpers({
  articles: function() {
    console.log('articles returned'); // DELETE
    return Articles.find();
  }
});

Template.articles.onRendered(function() {
  var self = this;
  articleWrapper = self.$('#articles-list');
  article = articleWrapper.find('.article');
  $container = $('#articles-list').isotope({
    itemSelector: '.article',
    layoutMode: 'masonry',
  });
  console.log('file rendered'); // DELETE
});
