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
import ScreenFour from "./ScreenFour";

class Screen extends React.Component {
  static navigationOptions = {
      title: 'Screen Three',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container
        backgroundColor="#ad081e"
        onPress={() => navigate('ScreenFour')}
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

const Three = StackNavigator({
  Home: { screen: Screen},
  ScreenFour: { screen: ScreenFour},
});

const Container = ({ backgroundColor, onPress, children }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{backgroundColor}</Text>
    </TouchableOpacity>
    {children}
  </View>
);



export default Three;
