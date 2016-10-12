var ReactNative = require('react-native');
var React = require('react');
var {View, Text, StyleSheet} = ReactNative;
var MapView = require('react-native-maps');

watchID: (null: ?number);

var Location =  React.createClass({
  getInitialState: function(){
    return{
      initialPosition: [],
      currentPosition: []
    };
  },
  componentDidMount: function(){
      navigator.geolocation.getCurrentPosition(
         (position) => {
            var initialPosition = JSON.stringify(position);
            alert(initialPosition);
            this.setState({initialPosition});
         },
         (error) => alert(error.message),
         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        alert(JSON.stringify(position));
         var lastPosition = JSON.stringify(position);
         this.setState({lastPosition});
      });
   },
   componentWillUnmount: function() {
      navigator.geolocation.clearWatch(this.watchID);
  },
  render: function(){
    return(
      <View style={styles.map}>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
          <Text></Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
     ...StyleSheet.absoluteFillObject,
     height: 400,
     width: 400,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
     height: 300,
     width: 300
   },
});

module.exports = Location;
