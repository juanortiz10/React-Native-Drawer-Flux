var React = require('react');
var ReactNative = require('react-native');
var {View, Text, StyleSheet, Image} = ReactNative;

var ProfileBox = React.createClass({
  render: function(){
    return(
      <View>
        <Image style={styles.background} source={require('../icons/images.jpg')}/>
        <View style={styles.profile_container}>
          <Image style={styles.profile_image}
                source={{uri: 'http://www.microrevista.com/wp-content/uploads/2015/07/jobs-2.jpg'}}/>
          <Text style={styles.username}>Juan Jose Ortiz</Text>
        </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    height: 150
  },
  profile_image:{
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 150
  },
  profile_container: {
    top: 0,
    position: 'absolute'
  },
  username: {
    color: 'white',
    marginLeft: 10,
    marginTop: -5
  }
});

module.exports = ProfileBox;
