require.config({
  shim: { 
    'jquery_ujs': ['jquery'] 
  }, 
  paths: {
    jquery: 'lib/jquery',
    jquery_ujs: 'jquery_ujs',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    paginator: 'lib/paginator',
    bourbon: 'lib/modules/bourbon-overrides'
  }
});

require([
  'app',
  'jquery',
  'jquery_ujs',
  'bourbon'
], function(App, jquery, Bourbon){
  if ($('main').length > 0) {
    App.initialize();
  }
});