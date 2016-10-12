var ReactNative = require('react-native');
var React = require('react');
var {View, Text, StyleSheet , ListView} = ReactNative;
var MenuItem = require('./MenuItem.js');

var menu =[{
		"name": "Home",
		"icon": "home"
	}, {
		"name": "Contact",
		"icon": "user"
	}, {
		"name": "Location",
		"icon": "map-marker"
	},{
    "name": "Settings",
    "icon": "edit"
  }];

var Menu = React.createClass({
  render: function(){
    var contents = menu.map(function (currentValue, index, array){
        return (
            <MenuItem
								key={index}
								name={currentValue.name}
								icon={currentValue.icon}/>
        );
     });
    return(
	      <View style={styles.container}>
	          {contents}
	      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    marginTop: 10
  }
});

module.exports = Menu;
