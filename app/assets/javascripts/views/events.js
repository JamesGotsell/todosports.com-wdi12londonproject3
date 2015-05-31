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
      function addEventHandler(selector, fnName) {
        self.$el.find(selector).click(function () {
          // if fnName is abc then self.collection[fnName]() is exactly the same as self.collection.abc()
          self.collection[fnName]().done(function(data){
            self.render(data)
          })
        });
      }
      var self = this;
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data.events.event}));
      addEventHandler('.next_page', 'getNextPage');
      addEventHandler('.previous_page', 'getPreviousPage');
      return this.el;

    }
  });

  return EventsView;
});