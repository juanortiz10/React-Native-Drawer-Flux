var React = require('react');
var ReactNative = require('react-native');
var {View,
      Text,
      StyleSheet,
      Button,
      ScrollView} = ReactNative;
var icon = require('react-native-iconic-font/fontawesome');
var Card = require('../components/Card.js');

var contacts =[{
		"name": "Mi papa",
		"icon": "user",
    "phone": "12312312"
	}, {
		"name": "Mi mama",
		"icon": "user",
    "phone": "464564564"
	}, {
		"name": "Mi perro",
		"icon": "user",
    "phone": "345345353"
	},{
    "name": "Mi gato",
    "icon": "user",
    "phone": "123123"
  }];
var Contact = React.createClass({
  render: function(){
    var contents = contacts.map(function (currentValue, index, array){
        return (
          <Card
            key={index}
            name={currentValue.name}/>
        );
     });
    return(
      <ScrollView>
        <View style={styles.container}>
          {contents}
        </View>
      </ScrollView>
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
  },
  card: {
    backgroundColor: '#FFF'
  },
  cardContent: {
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  icons:{
    fontFamily: 'fontawesome',
    fontSize: 50
  }
});

module.exports = Contact;
