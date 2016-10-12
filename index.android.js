var ReactNative = require('react-native');
var React = require('react');

/*React native components*/
var {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  DrawerLayoutAndroid,
  Navigator,
  TouchableOpacity} = ReactNative;
var ToolbarAndroid = require('ToolbarAndroid');
var Reflux = require('reflux');

/*My native components*/
var Home = require('./android/views/Home.js');
var Contact = require('./android/views/Contact.js');
var Menu = require('./android/menu/Menu.js');
var ProfileBox = require('./android/components/ProfileBox.js');
var Settings = require('./android/views/Settings.js');
var Location = require('./android/views/Location.js');
var ComponentStore = require('./android/stores/ComponentStore.js');
/*Other sources*/
var icon = require('react-native-iconic-font/foundationicons');

//adb reverse tcp:8081 tcp:8081

var Main = React.createClass({
  mixins:[Reflux.listenTo(ComponentStore, 'onChange')],
  onChange: function(event,items){
    if(event == "change_route"){
      this.onClose();
    }
  },
  onIconClicked: function(){
    this.refs.drawer.openDrawer();
  },
  onClose: function(){
    this.refs.drawer.closeDrawer();
  },
  renderScene: function(route, navigator){
    if(route.name == 'Contact') {
      return <Contact navigator={navigator} />
    }
    if(route.name == 'Home') {
      return <Home navigator={navigator}/>
    }
    if(route.name == 'Settings') {
      return <Settings navigator={navigator} />
    }
    if(route.name == 'Location') {
      return <Location navigator={navigator} />
    }
  },
  render: function(){
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ProfileBox/>
      <Menu/>
    </View>
    );
    return(
      <DrawerLayoutAndroid
          drawerWidth={300}
          ref="drawer"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View>
            <ToolbarAndroid
              style={styles.toolbar}
              navIcon={require('./android/icons/menu.png')}
              onIconClicked={this.onIconClicked}/>
          </View>
          <Navigator
            style={{ flex:1 }}
            initialRoute={{ name: 'Home' }}
            renderScene={ this.renderScene }/>
      </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
  toolbar:{
    backgroundColor: '#FF5722',
    height: 55
  }
});

AppRegistry.registerComponent('TestingApp', function() {
  return Main;
});
