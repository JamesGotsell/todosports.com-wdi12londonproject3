define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'text!templates/myevents'
], function($, _, Backbone, PageableCollection, myEventsTemplate){

  var myEventsView = Backbone.View.extend({
    el: "main",
    initialize: function(){
      var self = this;
      debugger
      var collection = new PageableCollection();
      var data = collection.fetch({
        success:function(data){
          console.log(data);
          self.render(data);
        }
      });
    },
    render: function(data) {
      
      console.log(data)
      var template = _.template(myEventsTemplate);
      this.$el.html(template({events: data.model}));
      return this.el;
    }
  });

  return myEventsView;
});