define([
  'underscore',
  'backbone',
  'models/event'
], function(_, Backbone, Event){

var Events = Backbone.Collection.extend({
    model: event,
    url: "http://api.eventful.com/json/events/search?q=sport&|=London&api-key=['APP_KEY']",
    parse: function(response){
      return response.results;
    },
    initialize: function(){
      this.fetch({
        success: this.fetchSuccess,
         error: this.fetchError ,
          
      });
    }, 

  });

 // console.log(this)

new Events().fetch();
});

