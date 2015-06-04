Template.fullArticle.onCreated(function () {
  this.subscribe('articles');
});

Template.fullArticle.helpers({
  centerTitle: function () {
    return Meteor.settings.public.centerTitle;
  }
});
