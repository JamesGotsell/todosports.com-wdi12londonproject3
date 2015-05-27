define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/myevents'
], function($, _, Backbone, EventsCollection, myEventsTemplate){

  var myEventsView = Backbone.View.extend({
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
      var template = _.template(myEventsTemplate);
      this.$el.html(template({events: data.models}));
      return this.el;
      debugger
    }
  });

  return myEventsView;
});