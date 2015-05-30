// google maps javascript and map marker for each api result is coded here and injected into
// the events view in the browser

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/events'
 ], function($, _, Backbone, PageableCollection, EventsTemplate){

  var EventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      this.collection = new PageableCollection();

      this.collection.getPage(1).done(function(data){
        console.log(data)
        self.render(data)
      });
    },
    // using jQuery  for the click functions
    render: function(data){
      var self = this;
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data.events.event}));
      this.$el.find('.next_page').click(function () {
        self.collection.getNextPage().done(function(data){
          self.render(data)

        })
      });
      this.$el.find('.previous_page').click(function () {
        self.collection.getPreviousPage().done(function(data){
          self.render(data)
      
        })
      });
      return this.el;

    }
  });

  return EventsView;
});