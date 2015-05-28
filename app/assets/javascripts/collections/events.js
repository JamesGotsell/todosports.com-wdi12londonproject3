define([
  'underscore',
  'backbone',
  'models/event'
], function(_, Backbone, Event){

  return Backbone.Collection.extend({
    model: Event,
    url: "http://eventful.com/events?q=sport&|=london&api-key=['EVENTFUL_API_KEY']",
    initialize: function(){
      this.fetch({
        success: this.fetchSuccess,
        error: this.fetchError
      });
    } 
  });

});