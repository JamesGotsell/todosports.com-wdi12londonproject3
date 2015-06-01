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
      console.log(data)
      var collection = new FavouriteCollection();
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