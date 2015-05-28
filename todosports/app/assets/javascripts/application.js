require.config({
  paths: {
    jquery: 'lib/jquery',
    jquery_ujs: 'jquery_ujs',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text'
  }
});

require([
  'app',
  'jquery',
  'jquery_ujs'
], function(App, jquery, jquery_ujs){
  if ($('main').length > 0) {
    App.initialize();
  }
});