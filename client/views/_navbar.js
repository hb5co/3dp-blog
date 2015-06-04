Template.navbar.onCreated(function () {
  Session.setDefault('searchString', '');
});

Template.navbar.events({
  'keyup #search-bar': function (event) {
    Session.set('searchString', $('#search-bar').val());
  },
});
