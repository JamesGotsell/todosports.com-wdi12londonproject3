define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/events'
], function($, _, Backbone, EventsCollection, EventsTemplate){

  var EventsView = Backbone.View.extend({
    el: "article",
    intialize: function(){
      var self = this;
      var collection = new EventsCollection();
      var data = collection.fetch({
        success:function(data){
          self.render(data)
        }
      });
    },
    render: function() {
      var template = _.template(EventsTemplate);
      this.$el.html(template({events: data.model}));
      // return this.el;
    }
  });

  return EventsView;
});