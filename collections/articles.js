Articles = new Mongo.Collection('article');
if (Meteor.isServer) {
  DrupalDdp.registerType('article', Articles);
}
