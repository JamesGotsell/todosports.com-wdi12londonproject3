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
      var usersEvents = ['E0-001-084359599-9', 'E0-001-081867099-7', 'E0-001-081867107-5'];
      console.log(usersEvents);
      console.log(_.map(usersEvents, function (id) {
        return 'http://api.eventful.com/json/events/get?app_key=77pHDhGxrpBrzj4H&id=' + id;
      }));
      var collection = new PageableCollection();
      var data = collection.fetch({
        success:function(data){
          console.log(data);
          self.render(data);
        }
      });
    },
    render: function(data) {
      debugger
      console.log(data)
      var template = _.template(myEventsTemplate);
      this.$el.html(template({events: data.model}));
      return this.el;
    }
  });

  return myEventsView;
});