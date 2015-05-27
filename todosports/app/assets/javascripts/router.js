define([
  'jquery',
  'underscore',
  'backbone',
  'views/application',
  'views/search'
], function($, _, Backbone, ApplicationView, SearchBarView){

  var Router = Backbone.Router.extend({

    routes: {
      ''           : 'Home',
      'events'     : 'events',
      'myevents'   : 'myEvents',
      '*actions'    : 'defaultAction'
    }
  });

  var layout = function(){
    new ApplicationView().render();
    new SearchBarView().render();
  }

  var initialize = function() {
    layout();

    var router = new Router;

    router.on('route:events', function(){
      console.log("events");
    });
    router.on('route:myEvents', function(){
      console.log("myevents");
    });

    router.on('route:defaultAction', function(actions) {
      console.log('No route:', actions);
    });


    Backbone.history.start();
  }

  return {
    initialize: initialize
  }
});