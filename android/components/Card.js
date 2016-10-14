var React = require('react');
var ReactNative = require('react-native');
var {View,
      Text,
      StyleSheet,
      TouchableHighlight,
      Button,
      ScrollView} = ReactNative;
var icon = require('react-native-iconic-font/fontawesome');

var Card = React.createClass({
  render: function(){
    return(
      <TouchableHighlight>
        <View style={styles.container}>
            <View style={styles.image_container}>
              <Text style={styles.icons}>{icon('user')}</Text>
            </View>
            <View style={styles.text_container}>
              <Text>{this.props.name}</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    padding: 5
  },
  icons:{
    fontFamily: 'fontawesome',
    fontSize: 40,
    margin: 10,
  },
  text_container: {

  }
});

module.exports = Card;
