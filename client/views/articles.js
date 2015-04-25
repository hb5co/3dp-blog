Template.articles.onCreated(function () {
  this.subscribe('articles');
});

Template.articles.helpers({
  articles: function() {
    var searchQuery = '.*' + Session.get('searchString') + '.*';
    return Articles.find({title: {$regex: searchQuery, $options: "i"}}, {sort: {created: -1}});
  }
});

Template.articles.onRendered(function() {
  var self = this;
  articleWrapper = self.$('#articles-list');
  articles = articleWrapper.find('.article');
  $container = $('#articles-list').isotope({
    itemSelector: '.article',
    layoutMode: 'masonry',
    transitionDuration: '0.5s',
  });
  articles.velocity('transition.flipXIn', {
    stagger: 25,
    duration: 250,
    drag: true,
  });
  this.find('#articles-list .row')._uihooks = {
    insertElement: function(article, next) {
      $(article).insertBefore(next);
      $container.isotope('insert', $(article)).isotope('layout');
    },
    removeElement: function(article) {
      $(article).remove();
      $container.isotope('layout');
    }
  };
});
