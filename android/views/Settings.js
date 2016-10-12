var ReactNative = require('react-native');
var React = require('react');
var {View, Text, StyleSheet , ListView} = ReactNative;

var Settings =  React.createClass({
  render: function(){
    return(
      <View>
        <Text>Settings View</Text>
      </View>
    );
  }
});

module.exports = Settings;
