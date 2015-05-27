define([
  'underscore',
  'backbone',
  'models/event'
], function(_, Backbone, Events){

  return Backbone.Collection.extend({
    model: Events,
    url: "/events.json"
  });

});