define([
  'jquery',
  'underscore',
  'backbone',
  'collections/favourite',
  'text!templates/myevents'
], function($, _, Backbone, FavouriteCollection, myEventsTemplate){

  var myEventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      var collection = new FavouriteCollection();
      var data = collection.fetch({
        success:function(data){
          self.render(data);
        }
      });
    },

    render: function(data) {
      var template = _.template(myEventsTemplate);
      this.$el.html(template({ favourites: data.models }));
      return this.el;
    }, 
    events: {
      "click button.add.btn" : "buyTicket",
      "click button.google_calender" : "googleCalender"
    },

    buyTicket: function(){
      console.log("clicked");
      alert("you have bought a ticket for this event");
    },

    googleCalender: function(){
      console.log('added to google calender');
      alert("you added this event this your google calender");
    } 
  });

  return myEventsView;
});