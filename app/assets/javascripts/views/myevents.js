define([
  'jquery',
  'underscore',
  'backbone',
  'collections/favourite',
  'text!templates/myevents',
  'addthisevent'
], function($, _, Backbone, FavouriteCollection, myEventsTemplate, Addthisevent){

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
      addthisevent.refresh();
      return this.el;
    }
  });

  return myEventsView;
});