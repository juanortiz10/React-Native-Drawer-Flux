var React = require('react');
var ReactNative = require('react-native');
var {View, Text, StyleSheet, Button} = ReactNative;

var Contact = React.createClass({
  render: function(){
    return(
      <View>
        <Text>ja</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});

module.exports = Contact;
