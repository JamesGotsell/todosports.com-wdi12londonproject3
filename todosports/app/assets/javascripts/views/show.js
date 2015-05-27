define([
  'jquery',
  'underscore',
  'backbone',
  // 'collections/events',
  "models/event"
  'text!templates/show'
], function($, _, Backbone, EventsCollection, ShowTemplate){

  var ShowView = Backbone.View.extend({
    el: 'main',
    initialize:function(id){
      var self = this;
      this.event = new Event({id: id});
      debugger
      this.event.fetch({
        success: function(data) {
          self.render(data);
        }
      })
    },
    render: function(data) {
      var template = _.template(EventTemplate);
      this.$el.html(template({ event: data }));
    }

  });

  return ShowView;
});