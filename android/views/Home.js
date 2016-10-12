var React = require('react');
var ReactNative = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = ReactNative;
var Reflux = require('reflux');
var ComponentStore = require('../stores/ComponentStore.js');

var Home = React.createClass({
  mixins:[Reflux.listenTo(ComponentStore, 'onChange')],
  _navigate: function(name){
    this.props.navigator.push({
      name: name
    });
  },
  onChange: function(event, route_name){
    this._navigate(route_name);
  },
  render: function(){
    return(
      <View>
        <Text>I'm home view</Text>
        <TouchableHighlight onPress={ () => this._navigate("Contact") }>
          <Text>GO To Contact</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Home;
