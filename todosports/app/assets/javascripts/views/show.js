define([
  'jquery',
  'underscore',
  'backbone',
  'models/event',
  'text!templates/show'
  ],function($, _ , Backbone, Event, ShowTemplate){

      var ShowView = Backbone.View.extend({
        el: 'main',
        initialize: function(id){
          var self = this;
          this.model = new Event({id:id});
          this.model.fetch({
            success:function(data){
              self.render(data);
            }
          })
        },
        render: function(data){
          var template = _.template(ShowTemplate);
          this.$el.html(template({event: data}))
          console.log(data);
          return this;
        }
      })
      return ShowView;
  })
