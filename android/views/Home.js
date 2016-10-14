var React = require('react');
var ReactNative = require('react-native');
var {View, Text, StyleSheet, Image} = ReactNative;
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
      <View style={styles.container}>
        <Text style={style.image}>Home</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    ...StyleSheet.absoluteFillObject
  },
  image:{
    top: 180
  }
});

module.exports = Home;
