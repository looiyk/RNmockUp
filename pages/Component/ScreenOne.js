import React from 'react';
import {
  Text,
  Button,
  Platform,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import ScreenTwo from "./ScreenTwo";

class Screen extends React.Component {
  static navigationOptions = {
      title: 'Screen One',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container
        backgroundColor="#027c50"
        onPress={() => navigate('ScreenTwo')}
      >
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

const One = StackNavigator({
  Home: { screen: Screen},
  ScreenTwo: { screen: ScreenTwo},
});

const Container = ({ backgroundColor, onPress, children }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{backgroundColor}</Text>
    </TouchableOpacity>
    {children}
  </View>
);

export default One ;
