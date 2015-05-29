define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone , Router){
  
  var initialize = function(){
    console.log("here")
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});