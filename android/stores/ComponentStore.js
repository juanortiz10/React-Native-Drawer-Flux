var Reflux = require('reflux');
var HTTP = require('../services/httpService.js');
var ComponentActions = require('../actions/ComponentActions.js');

var ComponentStore = Reflux.createStore({
  listenables: [ComponentActions],
  setScreen: function(route_name){
    this.trigger('change_route', route_name);
  }
});

module.exports = ComponentStore;
