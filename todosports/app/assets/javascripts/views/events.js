// google maps javascript and map marker for each api result is coded here and injected into
// the events view in the browser

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/events'
], function($, _, Backbone, EventsCollection, EventsTemplate){

  var EventsView = Backbone.View.extend({
    el: "div",
    initialize: function(){
      var self = this;
      var collection = new EventsCollection();
      var data = collection.fetch({
        success:function(data){
          console.log(data);
          self.render(data);
        }
      });
    },
    render: function(data) {
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data.models}));
      return this.el;
      debugger
    }
  });

  return EventsView;
});