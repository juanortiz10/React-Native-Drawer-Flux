var ReactNative = require('react-native');
var React = require('react');
var {View, Text, StyleSheet, TouchableOpacity} = ReactNative;
var icon = require('react-native-iconic-font/fontawesome');
var ComponentStore = require('../stores/ComponentStore.js');

var MenuItem = React.createClass({
  onPress: function(){
    ComponentStore.setScreen(this.props.name);
  },
  render: function(){
    return(
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container} onClick={this.onClick}>
          <Text style={styles.icons}>{icon(this.props.icon)}</Text>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  icons:{
    fontFamily: 'fontawesome',
    fontSize: 22,
    margin: 5,
    padding: 2,
    width: 30
  },
  text: {
    fontSize: 16,
    margin: 5
  },
  container:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});

module.exports = MenuItem;
