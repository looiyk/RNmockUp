
import React from 'react';
import {
  StatusBar,
  AppRegistry,
  View,
  Platform,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScreenOne from '../Component/ScreenOne';
import ScreenThree from '../Component/ScreenThree';



class Profile extends React.Component {
  render() {

    return (<ScreenOne />)

  }
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/profile.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


}

class Settings extends React.Component {
  render() {
    return(
    <ScreenThree />
  )
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/settings.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


}

const Index = TabNavigator({
  Home: {
    screen: Profile,
  },
  Notifications: {
    screen: Settings,
  },
}, {
  tabBarPosition: 'Bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  }
});

export default Index;
