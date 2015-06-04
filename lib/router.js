Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function () {
  this.route('articles', {
    path: '/',
    waitOn: function () {
      return Meteor.subscribe('articles');
    },
  });
  this.route('article', {
    name: 'fullArticle',
    path: 'article/:_id',
    data: function () {
      return Articles.findOne({_id: this.params._id});
    }
  });
});
