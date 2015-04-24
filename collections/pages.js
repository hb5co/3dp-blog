Pages = new Mongo.Collection('page');
if (Meteor.isServer) {
  DrupalDdp.registerType('page', Pages);
}
