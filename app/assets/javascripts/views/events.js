// google maps javascript and map marker for each api result is coded here and injected into
// the events view in the browser

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/events'
 ], function($, _, Backbone, Events, EventsTemplate){

  var EventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      var collection = new Backbone.PageableCollection();
        collection.getPage(1).done(function(data){
          self.render(data)
          })
    },
    render: function(data) {
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data}));
      return this.el;
    },

    events: {
       events: {
        "click .next_page": "nextPage", 
        "click .previous_page": "previousPage"
      },

      nextPage: function{
        event.preventDefault();
        var self = this;
        var collection = new Backbone.PageableCollection();
        collection.getnext().done(function(data){
          self.render(data)
        })
      }, 
      previousPage: function{
        event.preventDefault();
        var self = this; 
        // how to recall the previous page
        var collection = new Backbone.PageableCollection();
        collection.getPreviousPage().done(function(data){
          self.render(data)
        })
      }

    }
  });

  return EventsView;
});