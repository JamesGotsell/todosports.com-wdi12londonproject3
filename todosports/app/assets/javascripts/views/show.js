define([
  'jquery',
  'underscore',
  'backbone',
  'collections/events',
  'models/event',
  'text!templates/show'

  ],function($, _ , Backbone , EventsCollection, ShowTemplate){
      var ShowView = Backbone.View.extend({
        el: 'main',
        initialize:function(id){
          var self = this;
          this.model = new Event({id:id});
          this.model.fetch({
            success:function(data){
              self.render(data);
            },
            render: function(data){
              var template =_.template(ShowTemplate);
              this.$el.html(template({events:data.models}))
            }
          })
        }
      })
      return ShowView;
  })
