var ReactNative = require('react-native');
var React = require('react');
var {View, Text, StyleSheet, Dimensions} = ReactNative;
var MapView = require('react-native-maps');
var { width, height } = Dimensions.get('window');

watchID: (null: ?number);

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


var Location =  React.createClass({
  getInitialState: function(){
    return{
      region: {
        latitude: 25.6490376,
        longitude: -100.4431841,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  },
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.onRegionChange(newRegion);
    });
  },
  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },
  onRegionChange: function(region){
      this.setState({ region: region });
  },
  render: function(){
    return(
      <View style={styles.map}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}>
        </MapView>
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
     ...StyleSheet.absoluteFillObject
   },
});

module.exports = Location;
