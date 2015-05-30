define([
  'underscore',
  'backbone',
  'paginator',
  'models/event'
], function(_, Backbone, PageableCollection, Event){

  var query    = "sport";
  var location = "London";
  var api_key  = EVENTFUL_API_KEY;

  return Backbone.PageableCollection.extend({
    model: Event,
    url: "http://api.eventful.com/json/events/search?q="+query+"&location="+location+"&app_key=" + api_key,
    sync : function(method, collection, options) {
      // By setting the dataType to "jsonp", jQuery creates a function
      // and adds it as a callback parameter to the request, e.g.:
      // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
      // If you want another name for the callback, also specify the
      // jsonpCallback option.
      // After this function is called (by the JSONP response), the script tag
      // is removed and the parse method is called, just as it would be
      // when AJAX was used.
      options.dataType = "jsonp";
      return Backbone.sync(method, collection, options);
    },
     parse : function(response){
      this.page = response.page;
      this.perPage = response.per_page;
      this.total = response.total
      return response.events.event;
    },
    state: {
        pageSize: 10,
        sortKey: "updated",
        order: 1
      },
      queryParams:{
         totalPages: null,
         totalRecords: null,
         sortKey: "sort",
         order: "direction",
         directions: {
           "-1": "asc",
           "1": "desc"
         }
      }
  }); 

});

