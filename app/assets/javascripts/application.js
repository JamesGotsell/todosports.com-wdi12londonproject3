require.config({
  paths: {
    jquery: 'lib/jquery',
    jquery_ujs: 'jquery_ujs',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    paginator: 'lib/paginator'
  }
});

require([
  'app',
  'jquery',
  'jquery_ujs'
], function(App, jquery){
  if ($('main').length > 0) {
    App.initialize();
  }
});